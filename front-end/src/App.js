import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import TryOn from './TryOn'
import Authentication from './Authentication';
import Login from './Login';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavMenu/>
        <Switch>

          <Route path='/mycloset'>
            <MyCloset/>
          </Route>

          <Route path='/myoutfits'>
            <MyOutfits/>
          </Route>

          {/* TODO: MyMannequin */}

          <Route path='/tryon'>
            <TryOn/>
          </Route>
          
        </Switch>

      </Router>
      {/* <Authentication/>
      <Login/> */}

      {/* <MyCloset/> */}
      {/* <MyOutfits/> */}
    </div>
  );
}

export default App;