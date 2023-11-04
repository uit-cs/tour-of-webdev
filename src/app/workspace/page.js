'use client'

import { useState } from 'react'
import Description from '@/components/Workspace/Description'
import HTMLEditor from '@/components/Workspace/HTMLEditor'
import Preview from '@/components/Workspace/Preview'

const Workspace = () => {
	const [value, setValue] = useState('')

	return (
		<main className='flex flex-row justify-between fixed top-[56px] left-0 right-0 bottom-0 z-0 bg-[#E0EBF5]'>
			<Description />
			<div className='w-[calc(50%-2px)] flex flex-col justify-between'>
				<Preview value={value} />
				<HTMLEditor
					value={value}
					setValue={setValue}
				/>
			</div>
		</main>
	)
}

export default Workspace
