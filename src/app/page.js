'use client'

import { useState } from 'react'
import Description from '@/components/Workspace/Description'
import HTMLEditor from '@/components/Workspace/HTMLEditor'
import Preview from '@/components/Workspace/Preview'
import Split from 'react-split'

export default function Home() {
	const [value, setValue] = useState('')

	return (
		<main className='flex flex-row justify-between fixed top-[56px] left-0 right-0 bottom-0 z-0 bg-lightblue'>
			<Split className='split w-full flex-row'>
				<Description />
				<Split
					className='split flex-col h-full'
					direction='vertical'>
					<Preview value={value} />
					<HTMLEditor
						value={value}
						setValue={setValue}
					/>
				</Split>
			</Split>
		</main>
	)
}
