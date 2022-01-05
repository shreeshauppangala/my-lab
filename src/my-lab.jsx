import React, { useState } from 'react';
import { EditorState, convertToRaw, ContentState, convertFromHTML } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Graph from "./graph";


const EditorConvertToHTML = () => {

    const [editorState, setEditorState] = useState(EditorState.createWithContent(
        ContentState.createFromBlockArray(
            convertFromHTML(
                `<h3>2012 Mobiqwik report update</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/><br/><p>Lorem ipsum 
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p> <Graph/>`
            )
        )
    ))

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }

    const getData = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    console.log(getData)
    return (
        <div>
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={onEditorStateChange}
            />
            <div style={{ backgroundColor: 'yellow' }}>
                {getData}
            </div>
        </div>
    );
}

export default EditorConvertToHTML