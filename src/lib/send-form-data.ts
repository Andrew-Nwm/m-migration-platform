// Ejemplo de cómo realizar el envío de datos de formularios a un endpoint API.

interface FormResponse {
	success: boolean;
	message?: string;
	error?: string;
	submissionId?: string;
}

export async function sendFormData(
	endpoint: string,
	formData: FormData
): Promise<FormResponse> {
	try {
		const response = await fetch(endpoint, {
			method: "POST",
			body: formData,
		});

		if (!response.ok) {
			const error = await response.json();
			throw new Error(error.error || `HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error sending form data:", error);
		return {
			success: false,
			error: error instanceof Error ? error.message : "Error desconocido",
		};
	}
}

export function validateFormData(
	formData: FormData,
	requiredFields: string[]
): {
	valid: boolean;
	errors: string[];
} {
	const errors: string[] = [];

	requiredFields.forEach((field) => {
		const value = formData.get(field);
		if (!value || (typeof value === "string" && value.trim() === "")) {
			errors.push(`El campo ${field} es requerido`);
		}
	});

	return {
		valid: errors.length === 0,
		errors,
	};
}
