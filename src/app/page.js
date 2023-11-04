'use client'
import Description from '@/components/Description'
import Workspace from '@/components/Workspace/Workspace'
import Split from 'react-split'

export default function Home() {
	return (
		<main className='flex flex-row justify-between fixed top-[56px] left-0 right-0 bottom-0 z-0 bg-lightblue'>
			<Split className='split w-full flex-row'>
				<Description />
				<Workspace />
			</Split>
		</main>
	)
}
