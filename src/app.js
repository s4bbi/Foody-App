import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import SearchBar from "./components/SearchBar"
import CardsDiv from "./components/CardsDiv"


 const Body = () => {
  return (
    <div className="body">
        <SearchBar/>
        <CardsDiv/>
    </div>
  )
  }

const AppComponent = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>  
    );      
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppComponent/>);



