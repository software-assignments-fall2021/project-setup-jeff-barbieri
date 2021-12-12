import React, {useState} from 'react';
import './Authentication.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Redirect, Routes , useHistory} from 'react-router-dom'; 
import MyCloset from './MyCloset';


const Authentication = () => {

    return(
        <div className="authentication">
             <h1>Virtual Apparel Try On</h1>

             
        
                <input type = "submit" className = "main" value = "Log In" />
                <Router>
                <Link to="/Login" className="btn btn-primary">Sign up</Link>
                </Router>
                <br />
                <br />
  
                <input type = "submit" className = "main" value="Create Account" />
                
                <input type="submit" id = "continue" value="Continue Without Account"  />
                {/* The following is supposed to continue to /MyCloset onClick but I can't figure it out now
                Need to support onClick */}
                <Router>
                    <Routes>
                    <Route path='/MyCloset'>
                        <MyCloset/>
                    </Route>
                    {/* <Link to="/MyCloset" >Sidkfsjp</Link> */}
                    </Routes>
                </Router>

   
        </div>
    )
}

export default Authentication