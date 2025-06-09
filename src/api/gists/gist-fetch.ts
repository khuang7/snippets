import { GistArraySchema, type Gist } from './gist-types'

export async function fetchGists(): Promise<Gist[]> {
	const token = import.meta.env.GITHUB_TOKEN
	const res = await fetch(`https://api.github.com/gists`, {
		headers: token ? { Authorization: `Bearer ${token}` } : undefined
	})
	if (!res.ok) throw new Error('Failed to fetch gists')
	const data = await res.json()
	console.log(JSON.stringify(data, null, 2))
	return GistArraySchema.parse(data)
}
