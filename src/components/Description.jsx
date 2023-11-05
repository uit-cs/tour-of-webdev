const Description = ({ module }) => {

	return (
		<div className='flex h-full flex-col'>
			<div className='flex h-full flex-col bg-blue rounded-md overflow-hidden'>
				<div className='flex flex-col h-full w-full overflow-y-auto'>
					<h1 className='text-2xl font-bold mb-2'>{module.title}</h1>
					<div id='content' className='px-4 py-4'>{module.content}</div>
				</div>
			</div>
		</div>
	)
}

export default Description