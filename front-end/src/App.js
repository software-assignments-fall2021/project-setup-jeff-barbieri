import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import MyMannequin from './MyMannequin'
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

          <Route path='/MyCloset'>
            <MyCloset/>
          </Route>

          <Route path='/MyOutfits'>
            <MyOutfits/>
          </Route>

          <Route path='/my-mannequin'>
            <MyMannequin/>
          </Route>

          {/* TODO: MyMannequin */}

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