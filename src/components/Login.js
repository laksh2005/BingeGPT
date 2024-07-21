import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {

  
  const [isSignInForm, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick=()=>{
    //VALIDATING THE FORM DATA
    //checkValidData(email, password)
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    //if there is an error message, we will return the program beginning, not proceed further
    if(message) return;
//and below code works only when there is no message
  
      //Now do sign in/sign up
      //email n pass are valid
      //CREATING A NEW USER 
      if(!isSignInForm){
        //SIGN UP logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
          // Signed up 
        const user = userCredential.user;
        console.log(user);  
        // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });

      } else{
        //SIGN IN logic

      }
    }
  


  const toggleSignInform=()=>{
    setisSignInform(!isSignInForm);
  };
  
  return (
    <div >
      <Header />
    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
      />
    </div>
      <form 
      onSubmit={(e)=>e.preventDefault()}
      className="bg-black text-white rounded-lg bg-opacity-80 absolute p-12 w-3/12 mx-auto my-36 right-0 left-0">
          <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          
          {!isSignInForm && (
            <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-900 bg-opacity-80 text-white"
            />
          )}
          
          <input 
          ref={email}
          type="text" 
          placeholder="Enter Email Address" 
          className="w-full p-4 my-2 bg-gray-900 bg-opacity-80" />

          <input 
          ref={password}
          type="password" 
          placeholder="Enter Password " 
          className="p-4 my-2 w-full bg-gray-900 bg-opacity-80" />

          {!isSignInForm && (
            <input
            type="password"
            placeholder="Confirm Password"
            className="p-4 my-2 w-full bg-gray-900 bg-opacity-80 text-white"
            />
          )}

          <p className="text-red-700 font-bold text-lg p-2">{errorMessage}</p>

          <button 
          className="p-4 my-6 bg-red-700 w-full"
          onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="p-4" onClick={toggleSignInform}>{isSignInForm ? "New to Netflix? Sign Up now." : "Already a user? Sign In now."}</p>
      </form>
    </div>
  )
};

export default Login