import React, {useState} from "react";
import './CSS/LoginSignup.css';
import { Link } from "react-router-dom";
import Login from "./Login";

const LoginSignup = () => {

    const [state,setState] = useState('Login');
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const Login = async ()=>{
        console.log("Login Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
    
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token)
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    
    }

    const Signup = async ()=>{
        console.log("Signup Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:"POST",
            headers:{
                Accept:'application/form-data',
                'Content-Type':'application/json',
            },
            body:JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
    
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token)
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    
    }

    // const validation = () => {
    //     var z = document.getElementById('name');
    //     var x = document.getElementById('email');
    //     var y = document.getElementById('passw');

    
    //     if (!x || !y || !z) {
    //       alert("Name,Email and password can't be empty");
    //       return;
    //     }
    //     alert("Success");
    //    };
    
    return(
        <div className="signup">
            <div className="signup-container ">
                <h2>
                    {state}
                </h2>
                <div className="signup-fields ">
                   {state==="Sign Up"?<input name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your Name" id="name"/>:<></>}
                    <input type="email" name="email" value={formData.email} onChange={changeHandler} placeholder="Email" id="email" />
                    <input type="password" name="password" value={formData.password} onChange={changeHandler} placeholder="Password"  id="passw"  />
                </div>
                <button onClick={()=>{state==="Login"?Login():Signup()}}>Continue</button>
                {state==="Sign Up"?<p className="login-login">
                     Already have an account? <span onClick={()=>{setState("Login")}}><Link to="/login">Login here</Link></span>
                 </p>:<p className="login-login">
                     Create an account? <span onClick={()=>{setState("Sign Up")}}><Link to="/loginsignup">Click here</Link></span>
                 </p>}
               
                 
                <div className="signup-agree">
                    <input type="checkbox" />
                    <p>By Continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            {/* <button><link to="/login">go to sign up</link></button> */}
        </div>
    )
}

export default LoginSignup;