import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log("Constructor")

        this.state = {
            name: "saVya",
            location: "Hyderabad",
            email: "savya69@gmail.com"
        };
    }

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/s4bbi");
        let json = await data.json()

        this.setState({
            userInfo: json
        })
        console.log(json)

    }


    render (){

        const { avatar_url, name, location, html_url } = this?.state?.userInfo ?? {};

        return(
            <div className="userCard">
                <h2>User Info:</h2>
                <img className="avatarImg" src={avatar_url}></img>
                <p><b>Name:</b> {name}</p>
                <p><b>Location: </b>{location}</p>
                <p><b>Github: </b>{html_url}</p>
            </div>
        )
    }
}

export default UserClass;