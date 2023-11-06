'use client'
import Description from './Description'
import PlayGround from './PlayGround'
import Split from 'react-split'

const Main = ({ module }) => {
	return (
		<main className='flex w-full h-[calc(100%-48px)] overflow-y-hidden'>
			<div className='flex h-full w-full p-2'>
				<Split
					className='split w-full'
					minSize={0}>
					<Description module={module} />
					<PlayGround module={module} />
				</Split>
			</div>
		</main>
	)
}

export default Main