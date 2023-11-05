'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Nav = ({ setShowToc }) => {
	return (
		<nav className='relative flex flex-col h-[48px] w-full bg-blue px-6 z-10'>
			<div className='flex w-full h-full justify-between items-center'>
				<div className='flex h-full flex-row items-center gap-4'>
					<Link href='/'>
						<Image
							src='/white-logo.png'
							width={80}
							height={40}
							alt='Trainee Logo'
							priority={true}
						/>
					</Link>
					<Link
						href='/workspace'
						className='text-white font-medium'>
						A Tour of WebDev
					</Link>
				</div>

				<div className='flex h-full flex-row items-center gap-4'>
					<Bars3Icon
						className='h-6 w-6 text-white font-medium hover:cursor-pointer'
						onClick={() => setShowToc(true)}
					/>
				</div>
			</div>
		</nav>
	)
}

export default Nav
