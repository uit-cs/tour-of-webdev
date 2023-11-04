'use client'
import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'
import { useRef } from 'react'

const HTMLEditor = ({ value, setValue }) => {
	const editorRef = useRef(null)

	const exampleCode = '<!-- Code here -->'

	const handleEditorDidMount = (editor, monaco) => {
		editorRef.current = editor
		emmetHTML(monaco)
	}

	return (
		<div className='h-[50%] w-full'>
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
