import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import  {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import NotFoundPage from './Pages/404'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <NotFoundPage/>
  },
  {
    path:"/login",
    element: <LoginPage/>,
  },
  {
    path:"/register",
    element: <RegisterPage/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
