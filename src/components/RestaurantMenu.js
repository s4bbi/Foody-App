import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo)

  if (resInfo === null) {
    return <Shimmer />;
  }
    


  const {name, costForTwoMessage} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};

  const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {};
    

    console.log(itemCards)


  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>{costForTwoMessage}</p>
      <h2>Our Menu</h2>
      <ul className="menuItems">
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item.card.info.name}: <b>₹{item.card.info.price / 100}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
