import type { APIRoute } from "astro";
import { 
	SHAREPOINT_TENANT_ID,
	SHAREPOINT_CLIENT_ID,
	SHAREPOINT_CLIENT_SECRET,
	SHAREPOINT_SITE_ID,
	SHAREPOINT_DRIVE_ID
} from "astro:env/server";
import { 
	uploadFileToSharePoint, 
	getClientId,
	buildFolderPath
} from "../../../lib/sharepoint";



const serializeFormData = (formData: FormData) => {
	const parts: string[] = [];
	const files: string[] = [];

	for (const [key, value] of formData.entries()) {
		if (typeof value === "string") {
			parts.push(`${key}: ${value}`);
		} else if (value instanceof File) {
			const fileSize = (value.size / 1024).toFixed(2);
			files.push(`  - ${value.name} (${fileSize} KB, tipo: ${value.type})`);
		}
	}

	let result = parts.join("\n");
	
	if (files.length > 0) {
		result += "\n\nArchivos adjuntos:\n" + files.join("\n");
	}

	return result;
};

export const POST: APIRoute = async ({ params, request }) => {
	const payload = await request.formData();
	const formId = params.id ?? "formulario";
	const timestamp = new Date().toISOString();

	const plainText = `Formulario: ${formId}\nFecha: ${timestamp}\n\n${serializeFormData(
		payload,
	)}\n`;



	// Subir a SharePoint si está configurado
	if (
		SHAREPOINT_TENANT_ID &&
		SHAREPOINT_CLIENT_ID &&
		SHAREPOINT_CLIENT_SECRET &&
		SHAREPOINT_SITE_ID
	) {
		try {
			// Obtener ID del cliente: número alien, teléfono, o ID temporal
			const clientId = getClientId(payload);
			
			// Construir ruta de carpeta: {año}/{numero_a || telefono || id_temporal}/{tipo_proceso}
			const folderPath = buildFolderPath(clientId, formId);
			
			// Configuración de SharePoint
			const sharePointConfig = {
				tenantId: SHAREPOINT_TENANT_ID,
				clientId: SHAREPOINT_CLIENT_ID,
				clientSecret: SHAREPOINT_CLIENT_SECRET,
				siteId: SHAREPOINT_SITE_ID,
				driveId: SHAREPOINT_DRIVE_ID,
			};

			// Subir archivo de texto del formulario
			const textFileName = `${formId}-${Date.now()}.txt`;
			const textFileBlob = new Blob([plainText], { type: 'text/plain; charset=utf-8' });
			
			const textUploadResult = await uploadFileToSharePoint(
				sharePointConfig,
				folderPath,
				textFileName,
				textFileBlob,
				'text/plain; charset=utf-8'
			);

			if (!textUploadResult.success) {
				console.error("Error subiendo archivo de texto a SharePoint:", textUploadResult.error);
			}

			// Subir todos los archivos adjuntos
			const allFiles: File[] = [];
			
			// Obtener todos los archivos del campo "files" (múltiples)
			const filesField = payload.getAll('files');
			for (const file of filesField) {
				if (file instanceof File) {
					allFiles.push(file);
				}
			}
			
			// También obtener otros archivos que puedan estar en otros campos
			for (const [key, value] of payload.entries()) {
				if (key !== 'files' && value instanceof File) {
					allFiles.push(value);
				}
			}

			// Subir cada archivo
			for (const file of allFiles) {
				// Validar que el archivo tenga nombre y tamaño
				if (!file.name || file.name.trim() === '' || file.size === 0) {
					console.warn(`Archivo ignorado: nombre vacío o tamaño 0`);
					continue;
				}

				const fileBuffer = await file.arrayBuffer();
				const fileBlob = new Blob([fileBuffer], { type: file.type || 'application/octet-stream' });
				
				const fileUploadResult = await uploadFileToSharePoint(
					sharePointConfig,
					folderPath,
					file.name,
					fileBlob,
					file.type || 'application/octet-stream'
				);

				if (!fileUploadResult.success) {
					console.error(
						`Error subiendo archivo ${file.name} a SharePoint:`,
						fileUploadResult.error
					);
				}
			}
		} catch (error) {
			console.error("Error en proceso de SharePoint:", error);
		}
	}

	return new Response(JSON.stringify({ 
		success: true, 
		message: "Formulario recibido correctamente" 
	}), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "no-store",
		},
	});
};
