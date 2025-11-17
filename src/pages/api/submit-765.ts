// En este archivo hay un ejemplo de cómo manejar la submisión de un formulario I-765.

import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
	try {
		const formData = await request.formData();

		// Convertir FormData a objeto
		const data: Record<string, any> = {};
		formData.forEach((value, key) => {
			data[key] = value;
		});

		// Validación básica
		if (!data.firstName || !data.lastName || !data.email) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Campos requeridos faltantes (nombre, apellido, email)",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			);
		}

		// Validar email
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(data.email as string)) {
			return new Response(
				JSON.stringify({
					success: false,
					error: "Email inválido",
				}),
				{ status: 400, headers: { "Content-Type": "application/json" } }
			);
		}

		// Log de datos recibidos (en producción, aquí procesarías los datos)
		console.log("=".repeat(50));
		console.log("Formulario I-765 recibido:");
		console.log(JSON.stringify(data, null, 2));
		console.log("=".repeat(50));

		// AQUÍ IMPLEMENTARÍAS:
		// - Guardar en base de datos
		// - Enviar email de confirmación
		// - Generar PDF
		// - Integrar con servicios externos
		// - etc.

		// Simular procesamiento
		await new Promise((resolve) => setTimeout(resolve, 500));

		return new Response(
			JSON.stringify({
				success: true,
				message:
					"Formulario I-765 recibido correctamente. Recibirá un email de confirmación.",
				submissionId: `I765-${Date.now()}`, // ID único de submission
			}),
			{ status: 200, headers: { "Content-Type": "application/json" } }
		);
	} catch (error) {
		console.error("Error procesando formulario I-765:", error);
		return new Response(
			JSON.stringify({
				success: false,
				error: "Error interno del servidor",
			}),
			{ status: 500, headers: { "Content-Type": "application/json" } }
		);
	}
};
