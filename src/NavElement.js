import React from 'react';
import {Link} from 'react-router-dom';

class NavElement extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            width: 5
        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll(){
        const divHeight = document.querySelector('[data-zenpicture]').clientHeight;
        if (divHeight >= window.pageYOffset) {
            document.querySelector("[data-nav]").style.top = "0";
        } else {
            document.querySelector("[data-nav]").style.top = "-60px";
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        const windowWidth = window.innerWidth;
        this.setState({
            width : windowWidth
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }





    render(){
        return(
            <div>
                <link rel="stylesheet" href="./styles/nav-partial.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Libre+Franklin" rel="stylesheet" />

                <div className="picture-frame" data-zenpicture>
                    <img src="./images/plane-hero.jpg" alt="breathtaking view of plane taking off" />
                    <div className="zenpilot-title">
                        <h1>Zen Pilot</h1>
                        <h5>mindful tips to </h5>
                        <h5>navigate your life</h5>
                </div>
                </div>
                <div className="nav-bar"  data-nav> {/* style={{width:`${this.state.windowWidth}`}} */}
                    <Link to="/"><h3> Home </h3> </Link> <h3>|</h3> <Link to="/blogs"><h3>Journal</h3></Link> <h3>| </h3> <Link to="/checklists"><h3>Checklists </h3></Link> <h3>| </h3> <Link to="/about"> <h3>About </h3></Link> <h3>| </h3> <Link to="/press"><h3>Read </h3></Link>
                </div>
            </div>
        )
    }
}
export default NavElement;







