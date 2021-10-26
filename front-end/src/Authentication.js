import React from 'react';
import './Authentication.css';

const Authentication = () => {
    return(
        <div className="authentication">
             <h1>Virtual Apparel Try On</h1>
             <p>
                <button class = "main" > Login </button>
            </p>
            <p>
                <button class = "main" > Create Account</button>
            </p>
            <p>
                <button id = "continue"> Continue Without Account </button>
            </p>
        </div>


    )
}

export default Authentication