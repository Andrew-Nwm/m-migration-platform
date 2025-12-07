import { defineCollection, z } from "astro:content";

const validationSchema = z
	.object({
		minLength: z.number().optional(),
		maxLength: z.number().optional(),
		pattern: z.string().optional(),
		min: z.number().optional(),
		max: z.number().optional(),
	})
	.optional();

const fieldSchema = z.object({
	name: z.string(),
	label: z.string(),
	type: z.string(),
	required: z.boolean().optional(),
	placeholder: z.string().optional(),
	options: z.array(z.string()).optional(),
	validation: validationSchema,
});

const forms = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		color: z.string(),
		icon: z.string(),
		fields: z.array(fieldSchema),
		requiredFiles: z.array(z.string()).optional(),
	}),
});


export const collections = {forms};