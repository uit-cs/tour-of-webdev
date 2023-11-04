import Link from 'next/link'

const TableOfContents = ({ tocRef }) => {
	return (
		<div
			ref={tocRef}
			className='toc flex flex-col justify-start bg-[#E0EBF5] w-[500px] fixed top-[56px] right-0 bottom-0 z-50 overflow-y-auto hidden'>
			<div>
				<span className='text-[#00476F] text-xl px-2 py-2 block'>
					Using the tour
				</span>
				<ul className='bg-white'>
					<li className='px-2 py-1'>
						<Link href='/workspace'>Welcome</Link>
					</li>
					<li className='px-2 py-1'>
						<Link href='/workspace'>Hello, World!</Link>
					</li>
				</ul>
			</div>
			<div>
				<span className='text-[#00476F] text-xl px-2 py-2 block'>
					Basics
				</span>
				<ul className='bg-white'>
					<li className='px-2 py-1'>
						<Link href='/workspace'>Packages</Link>
					</li>
					<li className='px-2 py-1'>
						<Link href='/workspace'>Hello, World!</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default TableOfContents
