import { createBrowserRouter }  from "react-router-dom";
import Main from "../../Layout/Main";
import MyAppliedJobs from "../../Pages/Home/AvailableJobs/MyAppliedJobs/MyAppliedJobs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SingUp></SingUp>
            },
            {
                path: '/myappliedjob',
                element: <PrivateRoute><MyAppliedJobs></MyAppliedJobs></PrivateRoute> 
            }
        ]
    }
])

export default router