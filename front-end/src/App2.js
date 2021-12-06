import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import MyMannequin from './MyMannequin'
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

          <Route path='/my-closet'>
            <MyCloset/>
          </Route>

          <Route path='/my-outfits'>
            <MyOutfits/>
          </Route>

          <Route path='/my-mannequin'>
            <MyMannequin/>
          </Route>

          <Route path='/try-on'>
            <TryOn/>
          </Route>
          
        </Switch>

      </Router>
      {/* <Authentication/>
      <Login/> */}
      <Route path='/login'>
        <Login/>
      </Route>

      <Route path='/register'>
        <Register/>
      </Route>

      {/* <MyCloset/> */}
      {/* <MyOutfits/> */}
      <Footer/>
    </div>
  );
}

export default App;