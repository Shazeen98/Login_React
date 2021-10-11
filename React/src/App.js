


import React, {Component, useState } from 'react'
import Login from './components/Login';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';


import Signupage from './components/Signupage';
import Homepage from './components/Homepage';

//
import ReSetPage from './components/pages/ReSetPage';



class App extends Component {

  state={
    user : null
  }


 
  
render(){
 return (
    
      
      <Router>
        <Switch>
         
            <Route path = '/login' component={Login}/>

            <Route  path= '/ReSetPage'  component={ReSetPage}/>
            <Route  path= '/signup'  component={Signupage}/>
            <Route path= '/'  component={()=> <Homepage user = {this.state.user}/>}/>

        </Switch>
      </Router>
     
   
  );
}
}

export default App;
