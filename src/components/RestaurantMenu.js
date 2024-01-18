import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setresInfo] = useState(null)
    const { resId } = useParams()


    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch( MENU_API + resId );
        console.log(data)

        const json = await data.json();

        console.log(json);

        setresInfo(json)
};

if (resInfo === null){
    return (
    <Shimmer />
    ); 
} 

    const {name, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info ?? {}

    const {itemCards} = resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {};
    
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p><b>Cuisine:</b> {cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Our Menu</h2>
            <ul className="menuItems">
                {itemCards.map(item => 
                <li key={item.card.info.id}>
                    {item.card.info.name}: <b>₹{item.card.info.price/100}</b>
                </li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu