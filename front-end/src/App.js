import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import TryOn from './TryOn'
import Authentication from './Authentication';
import Login from './Login';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  
  return (
    <div className="App">
      
      <Router>
      <NavMenu/>
 
        
        <Routes>

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
          {/* <Route path = '/Authentication'>
          <Authentication/>
        </Route> */}
        </Routes>

      </Router>
      {/* <Authentication/> */}
      

      {/* <MyCloset/> */}
      {/* <MyOutfits/> */}
    </div>
  );
}

export default App;