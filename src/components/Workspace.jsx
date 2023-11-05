'use client'
import Nav from './Nav'
import Main from './Main'
import TableOfContents from './TOC'
import { useState } from 'react'

const Workspace = ({ module }) => {
	const [showToc, setShowToc] = useState(false)

	return (
		<div className='flex flex-col h-full w-full bg-lightblue'>
			<Nav setShowToc={setShowToc} />
			<Main module={module} />
			<TableOfContents
				showToc={showToc}
				setShowToc={setShowToc}
				module={module}
			/>
		</div>
	)
}

export default Workspace
