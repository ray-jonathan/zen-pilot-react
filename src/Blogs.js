import React from 'react';
import TextEdit from './TextEdit'
import {Link} from 'react-router-dom';

function Blogs(props){
    return(
    <div>
        You're on the Blog Page
        <Link to='/blogtest' >TO BLOG TEST</Link>
        {/* <TextEdit /> */}
    </div>
    )
}

export default Blogs;