import { z } from 'zod'

export const GistFileSchema = z.object({
	filename: z.string()
	// type: z.string().optional(),
	// language: z.string().nullable().optional(),
	// raw_url: z.string().optional(),
	// size: z.number().optional(),
	// content: z.string() // <-- Ensure this is present
})

export const GistSchema = z.object({
	id: z.string(),
	description: z.string().nullable(),
	html_url: z.string(),
	files: z.record(GistFileSchema)
})
export const GistArraySchema = z.array(GistSchema)

export type Gist = z.infer<typeof GistSchema>
