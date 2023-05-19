import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className="my-container">
 <AuthProvider>
 <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
 </AuthProvider>
 </div>
)
