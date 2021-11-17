import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import TryOn from './TryOn'
import MyMannequin from './MyMannequin'
import Footer from './Footer'
import Authentication from './Authentication';
import Login from './Login';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import { Component } from 'react'

function App() {
  //TODO connect react to express
  
  return (
    <div className="App">
      
      <Router>
        <NavMenu/>
        <Switch>

          <Route path='/MyCloset'>
            <MyCloset/>
          </Route>

          <Route path='/MyOutfits'>
            <MyOutfits/>
          </Route>

          {/* TODO: MyMannequin */}
          <Route path='/MyMannequin'>
            <MyMannequin/>
          </Route>

          <Route path='/TryOn'>
            <TryOn/>
          </Route>
          
          {/* TODO fix footer to every page */}
          <Footer/>
          
        </Switch>

      </Router>
      {/* <Authentication/>
      <Login/> */}
    </div>
  );
}

export default App;