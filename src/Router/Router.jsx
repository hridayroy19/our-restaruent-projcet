import { createBrowserRouter } from "react-router-dom";
import MainLoaut from "../Leaout/MainLoaut";
import Home from "../Pages/Home";

const MyCrateRouter = createBrowserRouter ([
    {
        path:"/",
        element:<MainLoaut></MainLoaut>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])


export default MyCrateRouter;