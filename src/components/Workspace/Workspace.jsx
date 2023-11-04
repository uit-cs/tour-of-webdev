'use client'
import HTMLEditor from '@/components/Workspace/HTMLEditor'
import Preview from '@/components/Workspace/Preview'
import Split from 'react-split'
import { useState } from 'react'

const Workspace = () => {
	const [value, setValue] = useState('')

	return (
		<>
			<Split
				className='split flex-col h-full w-[50%]'
				direction='vertical'>
				<HTMLEditor
					value={value}
					setValue={setValue}
				/>
				<Preview value={value} />
			</Split>
		</>
	)
}

export default Workspace
