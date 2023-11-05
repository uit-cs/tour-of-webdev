'use client'
import Nav from './Nav'
import Main from './Main'
import TableOfContents from './TOC'
import { useState } from 'react'

const Workspace = () => {
	const [showToc, setShowToc] = useState(false)

	return (
		<div className='flex flex-col h-full w-full bg-lightblue'>
			<Nav setShowToc={setShowToc} />
			<Main />
			<TableOfContents
				showToc={showToc}
				setShowToc={setShowToc}
			/>
		</div>
	)
}

export default Workspace
