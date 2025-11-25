import type { APIRoute } from "astro";
import { SEND_DATA_FORM } from "astro:env/server";

const serializeFormData = (formData: FormData) => {
	const parts: string[] = [];

	for (const [key, value] of formData.entries()) {
		if (typeof value === "string") {
			parts.push(`${key}: ${value}`);
		} else {
			parts.push(`${key}: ${value.name}`);
		}
	}

	return parts.join("\n");
};

export const POST: APIRoute = async ({ params, request }) => {
	const payload = await request.formData();
	const formId = params.id ?? "formulario";
	const timestamp = new Date().toISOString();

	const plainText = `Formulario: ${formId}\nFecha: ${timestamp}\n\n${serializeFormData(
		payload,
	)}\n`;

	if (SEND_DATA_FORM) {
		try {
			await fetch(SEND_DATA_FORM, {
				method: "POST",
				headers: {
					"Content-Type": "text/plain; charset=utf-8",
				},
				body: plainText,
			});
		} catch (error) {
			console.error("Error enviando datos al webhook:", error);
		}
	}

	return new Response(plainText, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Content-Disposition": `attachment; filename="${formId}-${Date.now()}.txt"`,
			"Cache-Control": "no-store",
		},
	});
};

