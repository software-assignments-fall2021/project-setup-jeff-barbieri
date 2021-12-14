import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import TryOn from './TryOn'
import Authentication from './Authentication';
import Login from './Login';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Register from './Register'


function App() {
  
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

          <Route path='/TryOn'>
            <TryOn/>
          </Route>
          
          <Route path='/Login'>
            <Login/>
          </Route>
          <Route path='/Register'>
            <Register/>
          </Route>
          {/* <Route path = '/Authentication'>
          <Authentication/>
        </Route> */}
        </Switch>

      </Router>
      {/* <Authentication/> */}


      {/* <MyCloset/> */}
      {/* <MyOutfits/> */}
    </div>
  );
}

export default App;