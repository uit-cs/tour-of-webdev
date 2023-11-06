'use client'
import Nav from './Nav'
import Main from './Main'
import TableOfContents from './TOC'
import { useState } from 'react'

const Workspace = ({ section }) => {
	const [showToc, setShowToc] = useState(false)

	return (
		<div className='flex flex-col h-full w-full'>
			<Nav setShowToc={setShowToc} />
			<Main section={section} />
			<TableOfContents
				showToc={showToc}
				setShowToc={setShowToc}
				section={section}
			/>
		</div>
	)
}

export default Workspace
