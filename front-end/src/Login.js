import React, { useState, useEffect } from "react"
// import { Navigate } from "react-router-dom"
// import { Navigate, useSearchParams } from "react-router-dom"
import axios from "axios"
// import logo from './logo.svg';
import "./Login.css"
import { Route } from "react-router"
import { useHistory, BrowserRouter, Router } from "react-router-dom"

import MyCloset from "./MyCloset"


const Login = props => {

  
  // let [urlSearchParams] = useSearchParams() // get access to the URL query string parameters

  // create state variables to hold email and password
  const [response, setResponse] = useState({}) // the API will return an object with a JWT token, if the user logs in successfully
  const [errorMessage, setErrorMessage] = useState("")

  // if the user got here by trying to access our Protected page, there will be a query string parameter called 'error' with the value 'protected'
  // useEffect(() => {
  //   const qsError = urlSearchParams.get("error") // get any 'error' field in the URL query string
  //   if (qsError === "protected")
  //     setErrorMessage("Please log in to view our fabulous protected content.")
  // }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // if the user's logged-in status changes, save the token we receive from the server
  useEffect(() => {
    // if the user is logged-in, save the token to local storage
    if (response.success && response.token) {
      console.log(`User successfully logged in: ${response.email}`)
      localStorage.setItem("token", response.token) // store the token into localStorage
    }
  }, [response])

  // what to do when the user clicks the submit buton on the form
  // const handleSubmit = async e => {
  //   // prevent the HTML form from actually submitting... we use React's javascript code instead
  //   e.preventDefault()

  // //   React.useEffect(() => {
  // //     fetch("/api/user/login")
  // //         .then((res) => res.json())
  // //         // .then(setData)
  // //         .then((response) => setData(response.tops))
  // //         .catch(console.error);
  // // }, []);

  //   try {
  //     // create an object with the data we want to send to the server
  //     const requestData = {
  //       email: e.target.email.value, // gets the value of the field in the submitted form with name='email'
  //       password: e.target.password.value, // gets the value of the field in the submitted form with name='password',
  //     }
  //     // send a POST request with the data to the server api to authenticate
  //     const response = await axios.post(
  //       `localhost:5000/api/user/login`,
  //       requestData
  //     )
  //     // store the response data into the data state variable
  //     console.log(`Server response: ${JSON.stringify(response.data, null, 0)}`)
  //     setResponse(response.data)
  //   } catch (err) {
  //     // request failed... user entered invalid credentials
  //     setErrorMessage(
  //       "You entered invalid credentials."
  //     )
  //   }
  // }


  function HandleSubmit() {
    const history = useHistory();
  
    function handleClick() {
      history.push("/MyCloset");
    }
  
    return (
      <button type="submit" onClick={handleClick}>
        Log In
      </button>
    );
  }


  // if the user is not logged in, show the login form
  if (!response.success)
    return (
      <div className="Login">
        <h1>Log in</h1>
        {errorMessage ? <p className="error">{errorMessage}</p> : ""}
        <section className="main-content">
          <form onSubmit={HandleSubmit}>
            {
              //handle error condition
            }
            <label>Email: </label>
            <input type="text" name="email" placeholder="email" />
            <br />
            <br />
            <label>Password: </label>
            <input type="password" name="password" placeholder="password" />
            <br />
            <br />
            {/* <input type="submit" value="Log In" /> */}
            {HandleSubmit()}
          </form>
        </section>
      </div>
    )
  // otherwise, if the user has successfully logged-in, redirect them to a different page
  // in this example, we simply redirect to the home page, but a real app would redirect to a page that shows content only available to logged-in users
  // else return <Navigate to="/protected" />
  else return <Route to="/MyCloset" /> //changed to this for now, commented above out
}

export default Login
