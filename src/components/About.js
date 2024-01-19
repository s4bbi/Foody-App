import UserClass from "./UserClass";
import React from "react"

class About extends React.Component{
    
    constructor(props){
        super(props);

    }
    

    render() {

        return(
            <div>
                <p className="text-center font-bold text-2xl" >This is the About Us page for the Foody: The Food Delivery App</p>
                <UserClass />
            </div>
        )
}}

    

export default About;