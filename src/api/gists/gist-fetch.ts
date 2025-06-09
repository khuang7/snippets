import { GistArraySchema, type Gist } from './gist-types'

export async function fetchGists(): Promise<Gist[]> {
	console.log('attempts to fetch gists?')

	const token = import.meta.env.GITHUB_TOKEN
	console.log('token:', token)
	const res = await fetch(`https://api.github.com/gists`, {
		headers: token ? { Authorization: `Bearer ${token}` } : undefined
	})
	console.log('res:', res)
	if (!res.ok) throw new Error('Failed to fetch gists')
	const data = await res.json()
	console.log('data:', data)
	return GistArraySchema.parse(data)
}
