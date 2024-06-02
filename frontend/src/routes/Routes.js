import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "../components/login/login";
import { SignUp } from "../components/signup/signup";
import { MeetingCard } from "../components/home/card/card";
import { Home } from "../components/home/home";
import { Form } from "../components/form/form";

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

    const authenticatedRoutes = [
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/form',
            element: <Form />
        }
    ]

    const router = createBrowserRouter([
        ...routes,
        ...authenticatedRoutes
    ])

    return <RouterProvider router={router} />
}