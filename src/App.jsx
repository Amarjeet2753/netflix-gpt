import { useState } from 'react'
import Body from './components/Body'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './components/Browse'

import { RouterProvider } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/login",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <PrivateRoute/>, 
    children: [
      {
        index: true,
        element: <Browse />,
      }
    ]
  },
 
]);

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    
   <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
