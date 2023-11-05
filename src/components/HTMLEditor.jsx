'use client'
import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'

const HTMLEditor = ({ htmlCode, setHtmlCode }) => {
	const handleEditorDidMount = (editor, monaco) => {
		emmetHTML(monaco)
	}

	return (
		<div className='flex flex-col'>
			<Editor
				theme={'vs'}
				language={'html'}
				defaultValue={htmlCode}
				onMount={handleEditorDidMount}
				onChange={(value) => setHtmlCode(value)}
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
