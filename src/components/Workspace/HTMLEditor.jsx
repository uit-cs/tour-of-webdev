import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'

const HTMLEditor = ({ value, setValue }) => {
	const exampleCode = '<!-- Code here -->'

	const handleEditorDidMount = (editor, monaco) => {
		emmetHTML(monaco)
	}

	return (
		<div className='h-[calc(50%-2px)] w-full'>
			<Editor
				className=''
				theme={'vs-dark'}
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
