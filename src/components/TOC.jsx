import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const TableOfContents = ({ showToc, setShowToc }) => {
	return (
		<div>
			<div
				className={`${
					showToc ? 'fixed' : 'hidden'
				} z-30 inset-0 opacity-60 bg-black`}
				onClick={() => setShowToc(false)}></div>

			<div
				className={`${
					showToc ? 'translate-x-0' : 'translate-x-[100%]'
				} fixed bg-blue w-[500px] top-0 right-0 z-50 transition ease-in duration-200`}>
				<div className='flex flex-col h-[100vh] overflow-y-auto'>
					<div className='flex justify-between items-center bg-white px-4 py-4 h-[48px]'>
						<h1 className='text-darkblue text-xl'>
							Using the tour
						</h1>
						<XMarkIcon
							className='h-6 w-6 text-darkblue hover:cursor-pointer'
							onClick={() => setShowToc(false)}
						/>
					</div>
					<div className='flex flex-col overflow-y-auto'>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Welcome</Link>
						</span>
						<span className='block px-4 py-2'>
							<Link href='/workspace'>Hello, World!</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TableOfContents
