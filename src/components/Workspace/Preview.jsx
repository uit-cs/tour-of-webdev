const Preview = ({ value }) => {
	return (
		<div className='bg-white h-[50%]'>
			<iframe
				title='preview'
				className='h-full w-full pointer-events-none'
				srcDoc={value}></iframe>
		</div>
	)
}

export default Preview
