'use client'
import { useState } from 'react'
import Description from '@/components/Workspace/Description'
import HTMLEditor from '@/components/Workspace/HTMLEditor'
import Preview from '@/components/Workspace/Preview'
import Split from 'react-split'

const Workspace = () => {
	const [value, setValue] = useState('')

	return (
		<main className='h-full flex flex-row justify-center align-middle'>
			<Split className='split h-full w-full'>
				<Description />
				<div className='w-[50%] bg-slate-300'>
					<Preview value={value} />
					<HTMLEditor
						value={value}
						setValue={setValue}
					/>
				</div>
			</Split>
		</main>
	)
}

export default Workspace
