// import { useState } from "react";
// import Login from "./login";

// export default function App() {

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");

  // //function to check a valid email or not
  // const checkEmail = (email) => {
  //   if (email === "") {
  //     setEmailError('Email Required!');
  //   }
  //   else {
  //       if (!validateEmail(email)) {
  //       setEmailError("Invalid Email!");
  //     } else {
  //       setEmailError("");
  //       return true
  //     }
  //   }
  // }

  //   //function to check a valid password or not
  // const checkPassword = (password) => {
  //   if ( password === "" ) {
  //     setPasswordError('Password Required!')
  //   }
  //   else {
  //       if (!validatePassword(password)) {
  //       setPasswordError("Invalid Password!");
  //     } else {
  //       setPasswordError("");
  //       return true
  //     }
  //   }
  // }

  // // onBlur function will be call when email input field loses focus
  // const handleEmailBlur = () => {
  //   checkEmail(email)
  // }

  // // onBlur function will be call when password input field loses focus
  // const handlePasswordBlur = () => {
  //   checkPassword(password)
  // }
  
  // // Email validation format
  // const validateEmail = (email) => {
  //   const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return Regex.test(email);
  // };

  // // Password validation format
  // const validatePassword = (password) => {
  //   const Regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum eight characters, at least one letter, one number
  //   return Regex.test(password);
  // };

  // // handle input given on email input
  // const handleEmailChange = (el) => {
  //   const value = el.target.value;
  //   setEmail(value);
  //   checkEmail(value)
  // };
  

  // //handle input given on password input
  // const handlePasswordChange = (el) => {
  //   const value = el.target.value;
  //   setPassword(value);
  //   checkPassword(value)
  // };

  // // login validation function which will check all necessary conditions and will return true/false
  // const loginValidation = () => {
  //  checkEmail(email)
  //  checkPassword(password)
  //  if (checkEmail(email) && checkPassword(password)) {
  //   return true
  //  }
  // }
  
  // //fuction which will execute only when login validation function returns true
  // const handleSubmit = () => {
  //   console.log("loginValidation", loginValidation()); 
  //   if (loginValidation(true)) {
  //     alert("seccessfully logged in")
  //   }
  // }

  // return (
    // <div className="mainDiv">
    //   <h1>Log In</h1>

    //   <div className="inputDiv">
    //     <label>
    //       <strong>Email ID :</strong>{" "}
    //     </label>
    //     <input
    //     type="email"
    //       className="input"
    //       placeholder="Enter your Email ID"
    //       value={email}
    //       onChange={handleEmailChange}
    //       onBlur={handleEmailBlur}
    //     ></input>
    //   </div>

    //   <p>{emailError}</p>

    //   <div className="inputDiv" >
    //     <label>
    //       <strong>Password :</strong>
    //     </label>
    //     <input
    //     type="password"
    //       className="input"
    //       placeholder="Enter your Password"
    //       value={password}
    //       onChange={handlePasswordChange}
    //       onBlur={handlePasswordBlur}
    //     ></input>
    //   </div>

    //   <p>{passwordError}</p>

    //   <button className="btn" onClick={handleSubmit}>Log in</button>
    // </div>
//     <Login />
//   );
// }


import AboutUs from "./AboutUs";
import AdminAboutUs from "./AdminAbout Us";
import AdminContactUs from "./AdminContactUs";
import ContactUs from "./ContactUs";
import HomePage from "./HomePage";
import Login from "./login";
import NotFound from "./NotFound";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import Signup from "./SignUp";
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<PublicRoutes Component={Login}/>} />
        <Route path="/signup" element={<PublicRoutes Component={Signup}/>} />
        <Route path="/" element={<PrivateRoutes Component={HomePage} />}/>
        <Route path="/contactus" element={<PrivateRoutes Component={ContactUs} />}/>
        <Route path="/aboutus" element={< PrivateRoutes Component={AboutUs} />}/>
        <Route path= "*" Component={NotFound}/>
        <Route path="/admincontactus" element={<PrivateRoutes Component={AdminContactUs}/>}/>
        <Route path="/adminaboutus" element={<PrivateRoutes Component={AdminAboutUs}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;