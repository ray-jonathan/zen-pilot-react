import React from 'react';
function Press(props){
    return(
    <div>
        <link rel="stylesheet" href="./styles/press.css" />
        <div className="spacer" style={{height: '1em'}}></div>
        <div className="press-content">
            <div className="press-picture-frame">
                <img src="./images/couverture.jpeg" alt=""></img>
            </div>
            <p>
                Buy  <em style={{marginRight:"5px"}}>  Les pages du ciel  </em>    today.
            </p>
            <div className="press-button-frame" >
                <img src="./images/harmonugly.png" alt=""></img>
            </div>
            <div style={{marginBottom: "60px"}} className="press-button-frame">
                <img src="./images/amazon-button.png" alt=""></img>
            </div>
            <p>
                Read praise for  <em style={{marginRight: "5px"}}> Les pages du ciel  </em> here:
            </p>
            <div className="press-button">
                <div className="press-button-contents">
                        <i className="far fa-file-pdf"></i>  
                        <p>Ploërmel Communaté</p>
                </div>
            </div>
            <p>
                Xiron Poetry Club’s review and translation (Chinese) can be found here:
            </p>
            <div className="press-button">
                <div className="press-button-contents">
                    <i className="fas fa-external-link-alt"></i>  
                    <p>Xiron Poetry Club</p>
                </div>
            </div>
            <div className="press-button-frame">
                    <img src="./images/helene-poetry.gif" alt=""></img>
            </div>
            <p>
                Read a special Chinese translation of <em style={{marginRight: "5px"}}>Les pages du ciel </em>  <a href="https://mp.weixin.qq.com/s/avcEY-d_nbf1AySeNpbl8g">here</a>.
            </p>
        </div>
    </div>
    )
}
export default Press;