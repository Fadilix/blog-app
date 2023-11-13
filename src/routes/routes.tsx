import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PostDesc from "../pages/PostDesc";
import LandingPage from "../pages/LandingPage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: LandingPage,
    },

    {
        path: "/blogs",
        Component: Home
    },

    {
        path: "/write",
        Component: Write
    },

    {
        path: "/login",
        Component: Login
    },

    {
        path: "/register",
        Component: Register
    },

    {
        path: "/blogs/post/:id",
        Component: PostDesc
    },


])

export default router;