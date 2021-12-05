import React, {useState} from 'react';
import './Authentication.css';
import { Link } from 'react-router-dom';
import {BrowserRouter as Router, Route, Redirect, Switch , useHistory} from 'react-router-dom'; 
import MyCloset from './MyCloset';


const Authentication = () => {

    return(
        <div className="authentication">
             <h1>Virtual Apparel Try On</h1>

             <p>
        
                <input type = "submit" class = "main" value = "Log In" />
                <Router>
                <Link to="/Login" className="btn btn-primary">Sign up</Link>
                </Router>
                <br />
                <br />
  
                <input type = "submit" class = "main" value="Create Account" />
                
                <input type="submit" id = "continue" value="Continue Without Account"  />
                {/* The following is supposed to continue to /MyCloset onClick but I can't figure it out now
                Need to support onClick */}
                <Router>
                    <Switch>
                    <Route path='/MyCloset'>
                        <MyCloset/>
                    </Route>
                    {/* <Link to="/MyCloset" >Sidkfsjp</Link> */}
                    </Switch>
                </Router>

            </p>
        </div>
    )
}

export default Authentication