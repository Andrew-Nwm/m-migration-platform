import { defineCollection, z } from "astro:content";

const formsCollection = defineCollection({
	type: "content",
	schema: z.object({
		// Metadata del formulario
		title: z.string(),
		description: z.string(),
		formType: z.enum([
			"intake-765",
			"intake-i589",
			"intake-sij",
			"intake-vawa",
			"intake-visa-annex-victims",
			"intake-visa-t",
			"intake-visa-u",
		]),

		// Endpoint API asociado
		apiEndpoint: z.string(),

		fields: z.array(
			z.object({
				name: z.string(),
				label: z.string(),
				type: z.enum([
					"text",
					"email",
					"tel",
					"date",
					"number",
					"textarea",
					"select",
					"checkbox",
					"radio",
				]),
				required: z.boolean().default(false),
				placeholder: z.string().optional(),
				options: z.array(z.string()).optional(), // Para select, radio, checkbox
				validation: z
					.object({
						minLength: z.number().optional(),
						maxLength: z.number().optional(),
						pattern: z.string().optional(),
						min: z.number().optional(),
						max: z.number().optional(),
					})
					.optional(),
			})
		),

		// SEO y metadata
		metaTitle: z.string().optional(),
		metaDescription: z.string().optional(),

		// Estado del formulario
		published: z.boolean().default(true),
		order: z.number().default(0),

		// Fecha de creación/actualización
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
	}),
});

export const collections = {
	forms: formsCollection,
};
