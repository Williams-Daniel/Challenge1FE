import {createBrowserRouter} from "react-router-dom"
import Layout from "../Component/common/Layout"
import HomePage from "../Pages/Screen/HomePage"
import Register from "../Pages/Auth/Register"
import SigIn from "../Pages/Auth/SigIn"
import PrivateRouter from "./PrivateRouter"



const MainRouter = createBrowserRouter(
    [
        {
            path:"/register",
            element:<Register/>
        },
        {
            path:"/signin",
            element:<SigIn/>
        },
        {
            path:"/",
            element:
                <PrivateRouter>
                    <Layout/>
                </PrivateRouter>,
            children:[
                {
                    index:true,
                    element:<HomePage/>
                }
            ]
        }
    ]
)

export default MainRouter