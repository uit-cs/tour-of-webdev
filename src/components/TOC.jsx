import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const TableOfContents = ({ showToc, setShowToc, sectionId, sectionsList }) => {
	return (
		<div>
			<div
				className={`${
					showToc ? 'fixed' : 'hidden'
				} z-30 inset-0 opacity-10 bg-white`}
				onClick={() => setShowToc(false)}></div>

			<div
				className={`${
					showToc ? 'translate-x-0' : 'translate-x-[100%]'
				} fixed bg-gray w-[500px] top-0 right-0 z-50 rounded-l-md border-gray border-l-[1px] transition ease-in duration-200`}>
				<div className='flex flex-col h-[100vh] overflow-y-auto'>
					<div className='flex justify-between items-center bg-gray px-4 py-4 h-[48px] border-gray border-b-[1px] rounded-t-md'>
						<h1 className='text-xl'>Table of contents</h1>
						<XMarkIcon
							className='h-6 w-6 hover:cursor-pointer'
							onClick={() => setShowToc(false)}
						/>
					</div>
					<div className='flex flex-col overflow-y-auto'>
						{sectionsList.map((current) => (
							<span
								key={current.id}
								className={`block px-4 py-2 ${
									sectionId === current.id
										? 'text-emerald-400'
										: ''
								}`}>
								<Link href={`/sections/${current.id}`}>{`${current.id}. ${current.title}`}</Link>
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableOfContents
