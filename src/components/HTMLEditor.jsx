import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'

const HTMLEditor = ({ htmlCode, setHtmlCode }) => {
	const handleEditorDidMount = (editor, monaco) => {
		monaco.editor.defineTheme('dark', {
			base: 'vs-dark',
			inherit: true,
			rules: [],
			colors: {
				'editor.background': '#1C2128',
			},
		})
		monaco.editor.setTheme('dark')

		emmetHTML(monaco)
	}

	return (
		<div className='flex flex-col border-gray border-[1px]'>
			<Editor
				theme={'vs-dark'}
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
