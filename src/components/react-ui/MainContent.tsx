import React from 'react'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '../ui/button'
import type { Gist } from '@/api/gists/gist-types'
type Props = {
	gists: Gist[]
}

const MainContent: React.FC<Props> = ({ gists }) => {
	const [open, setOpen] = React.useState(false)
	const [selectedGist, setSelectedGist] = React.useState<Gist | null>(null)

	const handleOpen = (gist: Gist) => {
		console.log('Opening gist:', gist.files)
		setSelectedGist(gist)
		setOpen(true)
	}

	return (
		<>
			<div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
				{gists.map((gist) => (
					<div
						key={gist.id}
						className="h-full w-80 cursor-pointer  rounded-md border-2 border-black bg-white  p-4 shadow transition hover:bg-gray-100 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]"
						onClick={() => handleOpen(gist)}
					>
						<h3 className="font-bold">{gist.description || 'No description'}</h3>
						<p className="text-xs text-gray-500">{Object.keys(gist.files).join(', ')}</p>
					</div>
				))}
			</div>
			<Drawer open={open} onOpenChange={setOpen}>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>{selectedGist?.description || 'No description'}</DrawerTitle>
						<DrawerDescription>
							{selectedGist?.html_url && (
								<a
									href={selectedGist.html_url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-600 underline"
								>
									View on GitHub
								</a>
							)}
						</DrawerDescription>
					</DrawerHeader>
					<div className="max-h-96 overflow-auto p-4">
						{selectedGist &&
							Object.entries(selectedGist.files).map(([filename, file]) => (
								<div key={filename} className="mb-4">
									<div className="mb-1 font-mono font-bold">{filename}</div>
									<div className="overflow-x-auto rounded bg-gray-100 p-2 text-xs">
										Code all goes here, once i figure out a syntax library to work well with this
									</div>
								</div>
							))}
					</div>
					<DrawerFooter>
						<DrawerClose asChild>
							<Button variant="outline">Close</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default MainContent
