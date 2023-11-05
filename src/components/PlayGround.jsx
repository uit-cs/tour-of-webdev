'use client'
import { useState } from 'react'
import Split from 'react-split'
import HTMLEditor from './HTMLEditor'

const PlayGround = () => {
	const [htmlCode, setHtmlCode] = useState('<!-- index.html -->')

	return (
		<div className='flex h-full flex-col min-w-[30vw]'>
			<div className='flex h-full w-full flex-col bg-blue rounded-md overflow-hidden'>
				<Split
					className='split h-full flex-col'
					direction='vertical'>
					<HTMLEditor
						htmlCode={htmlCode}
						setHtmlCode={setHtmlCode}
					/>
					<div className='flex flex-col bg-lightblue'>
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
