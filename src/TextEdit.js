// import React, { Component } from 'react';
// import { Editor, EditorState, RichUtils } from 'draft-js';

// class TextEdit extends Component {
//     constructor() {
//         super();
//         this.state = {
//         editorState: EditorState.createEmpty(),
//         };
//     }
//     onChange = (editorState) => {
//         console.log(editorState);
//         this.setState({editorState})
//     };
//     handleKeyCommand = (command) => {
//         const newState = RichUtils.handleKeyCommand(
//             this.state.editorState, command
//         );
//         if (newState) {
//             this.onChange(newState);
//             return 'handled';
//         }
//         return 'not-handled';
//     }
//     render() {
//         const styles = {
//             border: '1px solid gray',
//             minHeight: '1em',
//         };
//         return (
//             <div style={styles} >
//                 <Editor
//                     style={styles}
//                     editorState={this.state.editorState}
//                     handleKeyCommand={this.handleKeyCommand}
//                     onChange={this.onChange}
//                 />
//             </div>
//         );
//     }
// }
// export default TextEdit;



import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class ControlledEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={this.onEditorStateChange}
      />
    )
  }
}
export default ControlledEditor;