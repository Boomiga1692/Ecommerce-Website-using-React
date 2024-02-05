import React from "react";
import './CSS/Login.css';
// Remove the unnecessary import
import { Link } from "react-router-dom";

const Login = () => {
  // Define the validate function within the Login component
  const validate = () => {
    var x = document.getElementById('email').value;
    var y = document.getElementById('passw').value;

    if (!x || !y) {
      alert("Email and password can't be empty");
      return;
    }

    alert("Success");
  };

  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-fields">
          <input type="email" placeholder="Email" id="email" name="email" />
          <input type="password" placeholder="Password" id="passw" name="password" />
        </div>
        {/* Set the type attribute of the button to "submit" */}
        <button type="submit" onClick={validate}>Continue</button>
        
      </div>
    </div>
  );
};

export default Login;




// import React from "react";
// import './CSS/Login.css'
// import './LoginSignup';
// import { Link } from "react-router-dom";
// import validate from "./validate";
// // import validate from "./validate";

// const Login = () => {
//     return(
//         <div className="login">
//             <div className="login-container">
//                 <h2>
//                     Login
//                 </h2>
//                 <div className="login-fields">
//                     <input type="email" placeholder="Email" id="email"  name="email" />
//                     <input type="password" placeholder="Password"  id="passw" name="password"  />
//                 </div>
//                 <button onSubmit={()=>validate()}>Continue</button>
//                 <p className="login-login">
//                     Don't have an account? <span><Link to="/signup">Signup</Link></span>
//                 </p>    
//             </div>

//             <script>
//         function validate() {
//     var x = document.getElementById('email').value;
//     var y = document.getElementById('passw').value;

//     if (!x || !y) {
//         alert("Email and password can't be empty");
//         return;
//     }

//     alert("Success");
// }
//      </script>
//         </div>
        
//     )
// }

// export default Login;
// import React from 'react';
// import { useForm, FormProvider } from 'react-hook-form';
// import Input from './Input'; // Import your Input component

// export const validate = () => {
//   const methods = useForm();

//   const onSubmit = methods.handleSubmit(data => {
//     console.log(data);
//   });

//   const email_validation = {
//     name: 'email',
//     label: 'Email', // Changed label to a more appropriate value
//     type: 'email',
//     id: 'email', // Changed id to a more appropriate value
//     placeholder: 'Enter Email ...',
//     validation: {
//       required: {
//         value: true,
//         message: 'Email is required',
//       },
//       maxLength: {
//         value: 30,
//         message: '30 characters max',
//       },
//     },
//   };

//   const password_validation = {
//     name: 'password',
//     label: 'Password', // Changed label to a more appropriate value
//     type: 'password',
//     id: 'password', // Changed id to a more appropriate value
//     placeholder: 'Type password ...',
//     validation: {
//       required: {
//         value: true,
//         message: 'Password is required',
//       },
//       minLength: {
//         value: 6,
//         message: 'Min 6 characters',
//       },
//     },
//   };

//   return (
//     <FormProvider {...methods}>
//       <form
//         onSubmit={onSubmit}
//         noValidate
//         autoComplete="off"
//         className="your-container-class" // Replace with your desired class name
//       >
//         <div className="">
//           <Input {...email_validation} />
//           <Input {...password_validation} />
//         </div>
//         <div className="">
//           <button className="" type="submit">
//             Continue
//           </button>
//         </div>
//       </form>
//     </FormProvider>
//   );
// };
