import UserClass from "./UserClass";
import React from "react"

class About extends React.Component{
    
    constructor(props){
        super(props);

    }
    

    render() {

        return(
            <div className="about">
                <h1>About Us</h1>
                <p>This is the About Us page for the Foody: The Food Delivery App</p>
                <UserClass />
            </div>
        )
}}

    

export default About;