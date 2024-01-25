import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(0)

  console.log(resInfo)

  if (resInfo === null) {
    return <Shimmer />;
  }
    
  console.log("huihuyi")
  console.log(resInfo)

  

  const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};  


  console.log(itemCards)

  let categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => {
      const cardType = c.card?.card?.["@type"];
      return (
        cardType === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        cardType === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
      );
    }
  );
  
  // console.log(categories)

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold pb-5">Our Menu</h2>
      {categories?.map((category, index) => {
        return (
          <RestaurantCategories
            key={category?.card?.card?.id}
            data={category?.card?.card}
            showItems={index === showIndex}
            toggleShowItems={() => setshowIndex((prevIndex) => (prevIndex === index ? null : index))}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
