import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavElement from './NavElement';
import About from './About';
import Press from './Press';

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
        <Route path='/about' render={(props) => (<About {...props} />)}/>
        <Route path='/press' render={(props) => (<Press {...props} />)}/>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
        <h3>Hi</h3>
      </div>
    );
  }
}

export default App;
