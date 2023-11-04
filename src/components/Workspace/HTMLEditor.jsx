import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'

const HTMLEditor = ({ value, setValue }) => {
	const exampleCode = '<!-- Code here -->'

	const handleEditorDidMount = (editor, monaco) => {
		emmetHTML(monaco)
	}

	return (
		<div className='w-full h-[50%] flex flex-col'>
			<div className='flex'>
				<span className='py-1 px-3 bg-white'>index.html</span>
			</div>
			<Editor
				theme={'vs'}
				language={'html'}
				defaultValue={exampleCode}
				onMount={handleEditorDidMount}
				onChange={(value) => setValue(value)}
				options={{
					minimap: {
						enabled: false,
					},
					contextmenu: false,
				}}
			/>
		</div>
	)
}

export default HTMLEditor
