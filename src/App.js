import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavElement from './NavElement';
import Home from './Home';
import About from './About';
import Press from './Press';
import Blogs from './Blogs';
import BlogTest from './BlogTest';
import Checklists from './Checklists';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      width: 5
    };
  }
  componentDidMount(){
    // const windowBottom = windowHeight;
    // console.log(windowBottom);
    // this.setState({
    //     width:windowBottom
    // });
  }
  render() {
    return (
      <div className="App">
        <NavElement />
        {/* <Route path='/press'><Press /></Route> */}
        {/* <Route path='/about'><About /></Route> */}
        <Route path='/' exact render={(props) => (<Home {...props} />)}/>
        <Route path='/about' render={(props) => (<About {...props} />)}/>
        <Route path='/press' render={(props) => (<Press {...props} />)}/>
        <Route path='/blogs' render={(props) => (<Blogs {...props} />)}/>
        <Route path='/blogtest' render={(props) => (<BlogTest {...props} />)}/>
        <Route path='/checklists' render={(props) => (<Checklists {...props} />)}/>
      </div>
    );
  }
}

export default App;
