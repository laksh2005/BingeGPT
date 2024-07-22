import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from "./Error";

export const Body = () => {

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

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}
