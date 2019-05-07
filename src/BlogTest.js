import React from 'react';
import TextEdit from './TextEdit'
import {Link} from 'react-router-dom';

class BlogTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
        <div>
            You're on the BlogTest Page
            {/* <Link to='/blogtest' /> */}
            <TextEdit />
            {/* <button onClick={()=>{
                
            }}
            >Save!</button> */}
        </div>
        )
    }
}

export default BlogTest;