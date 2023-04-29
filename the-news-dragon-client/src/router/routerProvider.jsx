import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/about",
            element: <div>THis is About Page</div>
        },
        
    ]
  },
]);

export default router;
