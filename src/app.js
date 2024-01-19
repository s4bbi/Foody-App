import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import CardsDiv from "./components/CardsDiv"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


 const Body = () => {
  return (

        <CardsDiv/>
  )
  }

const AppComponent = () => {
    return (
        <div className="font-sans">
            <Header />
            <Outlet />
        </div>  
    );     
}

const Grocery = lazy(
    () => import("./components/Grocery")
)

const appRouter = createBrowserRouter([
    {
        path : "/",
        element: <AppComponent />,
        children: [
            {
                path : "/",
                element: <Body />,
            },
            {
                path : "/about",
                element: <About />,
            },
            {
                path : "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {
                    <h1>Loading...</h1>
                }> <Grocery /> </Suspense> 
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);



