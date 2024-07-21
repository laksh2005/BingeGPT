import {auth} from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);


  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className=" flex absolute justify-between z-10 w-full p-8 y-2 bg-gradient-to-b from-black">
      <img
       className="w-44"
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
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
