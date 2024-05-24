import Add from "../pages/Add";
import Basket from "../pages/Basket";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Wishlist from "../pages/Wishlist";

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"add",
                element:<Add/>
            },
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path:"wishlist",
                element:<Wishlist/>
            },
            {
                path:"detail/:id",
                element:<Detail/>
            }
        ]
    }
]