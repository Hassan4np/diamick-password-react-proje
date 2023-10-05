import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Signup from './Signup/Signup.jsx'
import MainPage from './MainPage/MainPage.jsx'
import AuthProvider from './AuthContext/Authcontext.jsx'

import PrivatePepo from './PrivatePero/PrivatePepo.jsx'
import Orders from './Components/Order/Orders.jsx'
import Profile from './Profile/Profile.jsx'



const myBrowser = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    {
      path:"/order",
      element:<PrivatePepo><Orders></Orders></PrivatePepo>
    },{
      path:'/profile',
      element:<PrivatePepo><Profile></Profile></PrivatePepo>
    }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myBrowser} />
    </AuthProvider>
  </React.StrictMode>,
)
