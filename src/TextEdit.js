import React, { Component } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

class TextEdit extends Component {
    constructor() {
        super();
        this.state = {
        editorState: EditorState.createEmpty(),
        };
    }
    onChange = (editorState) => {
        console.log(editorState);
        this.setState({editorState})
    };
    handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(
            this.state.editorState, command
        );
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }
    render() {
        const styles = {
            border: '1px solid gray',
            minHeight: '1em',
        };
        return (
            <div style={styles} >
                <Editor
                    style={styles}
                    editorState={this.state.editorState}
                    handleKeyCommand={this.handleKeyCommand}
                    onChange={this.onChange}
                />
            </div>
        );
    }
}
export default TextEdit;