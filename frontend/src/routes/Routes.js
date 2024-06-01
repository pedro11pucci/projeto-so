import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Login } from "../components/login/login";

export const Routes = () => {

    const routes = [
        {
            path: '/',
            element: <Login />
        }
    ]

    const router = createBrowserRouter([
        ...routes
    ])

    return <RouterProvider router={router} />
}