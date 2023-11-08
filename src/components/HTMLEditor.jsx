import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'

const HTMLEditor = ({ htmlCode, setHtmlCode }) => {
	const handleEditorDidMount = (editor, monaco) => {
		// auto formatting
		setTimeout(function() {
			editor.getAction('editor.action.formatDocument').run();
		}, 300)

		monaco.editor.defineTheme('dark', {
			base: 'vs-dark',
			inherit: true,
			rules: [],
			colors: {
				'editor.background': '#22272E',
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
				value={htmlCode}
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
