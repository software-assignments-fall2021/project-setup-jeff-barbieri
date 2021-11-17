import React from 'react'
import MyOutfits from './MyOutfits'
import MyCloset from './MyCloset'
import TryOn from './TryOn'
import Authentication from './Authentication';
import Login from './Login';
import NavMenu from './components/NavMenu';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

function App() {
  //initialize back-end storage
  const [data, setData] = React.useState(null);

  //use effect to read back-end data
  React.useEffect(() => {
    fetch('/back-end/data')
      .then((res) => res.json())
      .then((data) => setData(data.message))
  }, [])
  
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