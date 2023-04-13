import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Spotify } from "./Pages/Spotify"

const router = createBrowserRouter([
    {
        path: "/spotify",
        element: <Spotify />
    },
]);

function Routes() {
    return(
        <RouterProvider router={router}/>
    )
}

export default Routes;