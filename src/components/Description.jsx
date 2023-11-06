const Description = ({ section }) => {

	return (
		<div className='flex h-full flex-col'>
			<div className='flex h-full flex-col bg-black rounded-md overflow-hidden border-gray border-[1px]'>
				<div className='flex flex-col h-full w-full overflow-y-auto'>
					<h1 className='text-2xl font-bold py-4 px-4'>{section.title}</h1>
					<div id='content' className='px-4 pt-2 pb-6' dangerouslySetInnerHTML={{ __html: section.content }}></div>
				</div>
			</div>
		</div>
	)
}

export default Description