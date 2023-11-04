'use client'

import Link from 'next/link'
import Image from 'next/image'
import TableOfContents from '@/components/TOC'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useEffect, useRef } from 'react'

const Nav = () => {
	const tocRef = useRef(null)
	const navRef = useRef(null)

	useEffect(() => {
		// Add event listener to the document object
		document.addEventListener('mousedown', closeTOC)

		// Remove event listener when the component unmounts
		return () => {
			document.removeEventListener('mousedown', closeTOC)
		}
	}, [])

	function showTOC() {
		tocRef.current.classList.toggle('hidden')
	}

	function closeTOC(e) {
		if (
			tocRef.current &&
			!tocRef.current.contains(e.target) &&
			navRef.current &&
			!navRef.current.contains(e.target)
		) {
			// Clicked outside the side navigation bar, close it
			tocRef.current.classList.add('hidden')
		}
	}

	return (
		<>
			<nav
				ref={navRef}
				className='flex flex-row justify-between items-center bg-[#00476F] px-6 py-2 fixed top-0 left-0 right-0 z-50'>
				<div className='flex flex-row items-center'>
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
						className='text-white font-bold ml-4 text-xl'>
						A Tour of HTML
					</Link>
				</div>
				<div>
					<Bars3Icon
						className='h-6 w-6 text-white font-bold hover:cursor-pointer'
						onClick={showTOC}
					/>
				</div>
			</nav>
			<TableOfContents tocRef={tocRef} />
		</>
	)
}

export default Nav
