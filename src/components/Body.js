import { useEffect } from 'react';
import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import { adduser, removeuser } from '../utils/userSlice';
import Error from "./Error";

export const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter ([
    {
        path:'/',
        element: <Login />,
    },
    {
        path:'/browse',
        element: <Browse />,
    },
    {
      path:'/error',
      element: <Error />,
  },
  ])

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        const {uid, email, displayName, photoURL}= user;
        dispatch(adduser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));

      } else{ //user is signed out
        dispatch(removeuser());
      }
    })
  }, [])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
