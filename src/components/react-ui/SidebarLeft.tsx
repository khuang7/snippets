import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader
} from '@/components/ui/sidebar'
import type { SidebarOption } from './SnippetView'

type SidebarLeftProps = {
	options: SidebarOption[]
	selected: string
	onSelect: (key: string) => void
}

export function SidebarLeft({ options, selected, onSelect }: SidebarLeftProps) {
	return (
		<Sidebar>
			<SidebarHeader>
				<span className="text-xl font-bold text-[#44624a]">&gt;_ kevhdev-snippets</span>
			</SidebarHeader>
			<div className="p-4" />
			<SidebarContent>
				{options.map((option) => (
					<SidebarGroup
						key={option.key}
						// selected={selected === option.key}
						onClick={() => onSelect(option.key)}
					>
						<span className="text-transparen inline-block rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-400 bg-clip-text text-xl font-bold hover:cursor-pointer hover:underline">
							{option.label}
						</span>
					</SidebarGroup>
				))}
			</SidebarContent>
			<SidebarFooter>
				<span className="block px-4 py-2 text-xs text-gray-500">made with love by kevhdev</span>
			</SidebarFooter>
		</Sidebar>
	)
}
