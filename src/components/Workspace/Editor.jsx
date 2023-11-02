'use client'
import Editor from '@monaco-editor/react'
import { emmetHTML } from 'emmet-monaco-es'
import { useRef } from 'react'


const HTMLEditor = () => {

    const exampleCode = '<!-- Code here -->'

    const handleEditorDidMount = () => {
		emmetHTML(window.monaco)
	}

	return (
		<>
			<div>
				<Editor
					className='h-[600px]'
					theme={'vs-dark'}
					language={'html'}
					value={exampleCode['html']}
					onMount={handleEditorDidMount}
				/>
			</div>
		</>
	)
}

export default HTMLEditor
