import React from 'react';
import './Authentication.css';

const Authentication = () => {
    return(
        <div className="authentication">
             <h1>Virtual Apparel Try On</h1>
             <p>
                <input type = "submit" class = "main" value="Log In" />
            </p>
            <p>
                <input type = "submit" class = "main" value="Log In" />
            </p>
            <p>
                <input type="submit" id = "continue" value="Continue Without Account" />
            </p>
        </div>


    )
}

export default Authentication