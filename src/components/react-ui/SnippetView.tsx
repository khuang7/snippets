import React from 'react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { SidebarLeft } from '@/components/react-ui/SidebarLeft'
import MainContent from './MainContent'
import type { Gist } from '@/api/gists/gist-types'

type Props = {
	gists: Gist[]
}

export type SidebarOption = {
	key: string
	label: string
}

const sidebarOptions: SidebarOption[] = [
	{ key: 'all', label: 'All Snippets' },
	{ key: 'git', label: 'Git Snippets' },
	{ key: 'frontend', label: 'Frontend Snippets' },
	{ key: 'backend', label: 'Backend Snippets' }
] as const

export type SidebarOptionKey = (typeof sidebarOptions)[number]['key']

const SnippetView = (props: Props) => {
	const { gists } = props

	console.log('gists?', gists)
	const [selected, setSelected] = React.useState<SidebarOptionKey>(sidebarOptions[0].key)

	return (
		<SidebarProvider>
			<SidebarLeft options={sidebarOptions} onSelect={setSelected} selected={selected} />
			<main className="h-full w-screen bg-[#44624a]">
				<div className="p-4 text-3xl font-bold text-gray-200"> Gist List</div>
				<MainContent gists={gists} />
			</main>
		</SidebarProvider>
	)
}

export default SnippetView
