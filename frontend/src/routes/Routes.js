import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/login/login";
import { SignUp } from "../components/signup/signup";

export const Routes = () => {

    const routes = [
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        }
    ]

    const router = createBrowserRouter([
        ...routes
    ])

    return <RouterProvider router={router} />
}