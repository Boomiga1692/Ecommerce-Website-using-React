import React from "react";
import './CSS/LoginSignup.css';


const Regist = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h2>
                    Register  Here
                </h2>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"   />
                    <input type="email" placeholder="Email"   />
                    <input type="password" placeholder="Password"   />
                </div>
                <button>Continue</button>
                
            </div>
        </div>
    )
}

export default Regist;