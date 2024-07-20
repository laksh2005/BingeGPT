import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
  ])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}