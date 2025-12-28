import { defineCollection, z } from "astro:content";

// ==========================================
// ESQUEMA DE FORMULARIOS
// ==========================================
const validationSchema = z
	.object({
		minLength: z.number().optional(),
		maxLength: z.number().optional(),
		pattern: z.string().optional(),
		min: z.number().optional(),
		max: z.number().optional(),
	})
	.optional();

// Esquema para columnas de tablas dinámicas
const tableColumnSchema = z.object({
	name: z.string(),
	label: z.string(),
	type: z.enum(["text", "number", "date", "select", "tel", "email"]),
	placeholder: z.string().optional(),
	options: z.array(z.string()).optional(),
	required: z.boolean().optional(),
});

const fieldSchema = z.object({
	name: z.string(),
	label: z.string(),
	type: z.string(),
	required: z.boolean().optional(),
	placeholder: z.string().optional(),
	options: z.array(z.string()).optional(),
	validation: validationSchema,
	// Propiedades para campos tipo "table"
	columns: z.array(tableColumnSchema).optional(),
	minRows: z.number().optional(),
	maxRows: z.number().optional(),
});

const forms = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		color: z.string(),
		icon: z.string(),
		fields: z.array(fieldSchema),
		requiredFiles: z.array(z.string()).optional(),
		photoRequirements: z.array(z.string()).optional(),
	}),
});

// ==========================================
// ESQUEMA DE NOTICIAS
// ==========================================
const news = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		type: z.enum(["urgente", "promocion", "noticia", "empresa"]),
		date: z.string(),
		link: z.string().optional(),
		icon: z.enum(["megaphone", "tag", "document", "location", "shield", "star"]),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

// ==========================================
// ESQUEMA DE TESTIMONIOS/COMENTARIOS
// ==========================================
const testimonials = defineCollection({
	schema: z.object({
		name: z.string(),
		role: z.string(),
		text: z.string(),
		rating: z.number().min(1).max(5),
		image: z.string(),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

// ==========================================
// ESQUEMA DE HISTORIAS DE ÉXITO
// ==========================================
const stories = defineCollection({
	schema: z.object({
		name: z.string(),
		country: z.string(),
		visa: z.string(),
		quote: z.string(),
		image: z.string(),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

// ==========================================
// ESQUEMA DE EQUIPO/EMPLEADOS
// ==========================================
const team = defineCollection({
	schema: z.object({
		name: z.string(),
		role: z.string(),
		description: z.string(),
		image: z.string(),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

// ==========================================
// ESQUEMA DE SERVICIOS
// ==========================================
const services = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.enum([
			"shield", "briefcase", "users", "plane", "book", "building",
			"heart", "globe", "document", "scale", "search", "translate",
			"chat", "company", "passport", "family", "gavel", "file"
		]),
		category: z.enum(["visas", "proteccion", "tramites", "otros"]),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

// ==========================================
// ESQUEMA DE ALIADOS ESTRATÉGICOS
// ==========================================
const partners = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		logo: z.string(),
		website: z.string().optional(),
		active: z.boolean().default(true),
		order: z.number().default(0),
	}),
});

export const collections = { forms, news, testimonials, stories, team, services, partners };
