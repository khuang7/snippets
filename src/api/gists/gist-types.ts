import { z } from 'zod'

export const GistSchema = z.object({
	id: z.string(),
	description: z.string().nullable(),
	html_url: z.string(),
	files: z.record(z.object({ filename: z.string() }))
	// ...add more fields as needed
})
export const GistArraySchema = z.array(GistSchema)

export type Gist = z.infer<typeof GistSchema>
