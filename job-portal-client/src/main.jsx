import React from 'react'
import ReactDom from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import router from './Router/Router.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />,
)
