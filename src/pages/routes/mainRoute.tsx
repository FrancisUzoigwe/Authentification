import { createBrowserRouter } from "react-router-dom"
import Layout from "../../components/block/Layout"
import View from "../Register/View"
import Error from "../../error/Error"
import SignUp from "../Register/SignUp"
import SignIn from "../Register/SignIn"
import ForgotPassword from "../Register/ForgotPassword"
import ChangePassword from "../Register/ChangePassword"
import HomeScreen from "../Home/HomeScreen"


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <View />
            },
            {
                path: 'sign-up',
                element: <SignUp />
            },
            {
                path: 'sign-in',
                element: <SignIn />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: 'change-password',
                element: <ChangePassword />
            },
            {
                path: "/home",
                element: <HomeScreen />
            },
            {
                path: "*",
                element: <Error />
            },
        ]
    }
])