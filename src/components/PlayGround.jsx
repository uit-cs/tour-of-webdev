'use client'
import { useState } from 'react'
import Split from 'react-split'
import HTMLEditor from './HTMLEditor'

const PlayGround = ({ sectionCode }) => {
	const [htmlCode, setHtmlCode] = useState(sectionCode)

	return (
		<div className='flex h-full flex-col'>
			<div className='flex h-full w-full flex-col rounded-md overflow-hidden'>
				<Split
					className='split h-full flex-col'
					direction='vertical'>
					<HTMLEditor
						htmlCode={htmlCode}
						setHtmlCode={setHtmlCode}
					/>
					<div className='flex flex-col bg-[#fff]'>
						<iframe
							title='preview'
							className='h-full w-full'
							srcDoc={htmlCode}></iframe>
					</div>
				</Split>
			</div>
		</div>
	)
}

export default PlayGround
