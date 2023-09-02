import React, {  } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import WatchPage from './WatchPage'

//import { useDispatch } from 'react-redux'

const Body = () => {
  //const dispatch=useDispatch();
  
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
        {
          path:"/watchPage",
          element:<WatchPage/>
        },
    ])
    
  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
