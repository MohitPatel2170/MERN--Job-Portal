import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateJob from '../Pages/CreateJob';
import Home from "../Pages/Home";

import Login from '../components/Login';
import JobDetails from '../Pages/jobDetails';
import MyJobs from '../Pages/MyJobs';
import SalaryPage from '../Pages/SalaryPage';
import UpdateJob from '../Pages/UpdateJob';



const router = createBrowserRouter([
    {
        path: "/",
        element : <App/>,
        children: [
            {path: "/", element: <Home/> },
            {
                path: "/post-job",
                element:<CreateJob/>
            },
            {
                path: "/my-job",
                element:<MyJobs/>
            },
            {
                path: "/salary",
                element:<SalaryPage/>
            },
            {
                path: "/edit-job/:id",
                element: <UpdateJob />,
                loader: ({params}) => fetch(`http://localhost:5001/all-jobs/${params.id}`)
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/job/:id",
               element: <JobDetails/>
            }
             
         ],
    },
]);

export default router;