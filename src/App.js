import React, { Component ,lazy,Suspense} from 'react';
import Navbar from "./component/navbar/nav.jsx";
import {Route,Switch} from "react-router-dom";  ///SWITCH ISUSE FOR WRAPPING
import Home from "./component/home/home.jsx";
// import Login from "./component/login/login.jsx";
// import About from "./component/about/about.jsx";
let Login=lazy(()=>import('./component/login/login.jsx'));
let About=lazy(()=>import('./component/about/about.jsx'));
class App extends Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Suspense fallback={<div>LOADING......</div>}>
        <Route path="/login"exact component={Login}/>
          <Route path="/about" exact component={About}/>
           </Suspense>
       
        <Switch>         
          <Route path="/" exact component ={Home}/>
          <Route path="/home"exact component={Home}/>
      </Switch>
         
      </React.Fragment>
    )
  }
}

export default App;
