import React, {Suspense, lazy} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import CardsDiv from "./components/CardsDiv"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

 const Body = () => {
  return (

        <CardsDiv/>
  )
  }

const AppComponent = () => {
    return (
          <Provider store={appStore}>
            <div className="font-sans">
                <Header />
                <Outlet />
            </div>
          </Provider>
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
            },
            {
                path: "/cart",
                element: <Suspense fallback = {
                    <h1>Loading your Items...</h1>
                }> <Cart /> </Suspense> 
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);



