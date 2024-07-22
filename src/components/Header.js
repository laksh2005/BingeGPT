import {auth} from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adduser, removeuser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate(); //this function is used to navigate the user to /browse, when gets authenticated
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName, photoURL}= user;
        dispatch(adduser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else{ //user is signed out
        dispatch(removeuser());
        navigate("/");
      }
    })
    //unsubscribing to onauthstatechange when the component unmounts
    return() => unsubscribe();
  }, [])  

  return (
    <div className=" flex absolute justify-between z-10 w-full p-8 y-2 bg-gradient-to-b from-black">
      <img
       className="w-44"
       src= {LOGO}
       alt = "logo"
       />

      {user &&(
        <div className="flex p-2">
        <img 
        className="w-12 h-12  rounded-md"
          alt="usericon"
          src= {user.photoURL} 
        />
        <button 
         onClick={handleSignOut}
         className="font-bold text-white hover:bg-black rounded-lg">Sign Out</button>
       </div> 
      )}

    </div>
  )
}

export default Header;
