import React, { useState, useEffect } from "react";
import Cards, {withPromotedLabel} from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const CardsDiv = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardsPromoted = withPromotedLabel(Cards)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
        );
        const json = await data.json();
        const restaurants =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants || [];
        setListOfRest(restaurants);
        setFilteredRest(restaurants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array, runs once when component mounts

  if (onlineStatus === false) {
    return (
      <h1 className="text-2xl font-bold text-center p-10">Looks like you are Offline 😿, try checking your connection.</h1>
    );
  }

  if (listOfRest.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="mx-16">
      <div className="search my-5 mx-auto flex justify-center">
        <input
          className="w-96 h-10 border border-solid rounded-lg p-2"
          type="text"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="border border-solid bg-yellow rounded-lg p-2"
          onClick={() => {
            console.log(searchText);
            const filteredRestaurants = listOfRest.filter((res) =>
              res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRest(filteredRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex justify-center">
        <button
          className="h-10 border rounded-lg px-4 mx-4 transition duration-150 ease-in-out hover:bg-yellow hover:scale-[1.05]"
          onClick={() => {
            setFilteredRest(listOfRest);
          }}
        >
          All Restaurants
        </button>
        <button
          className="h-10 border rounded-lg px-4 mx-4 transition duration-150 ease-in-out hover:bg-yellow hover:scale-[1.05]"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (x) => x.info.avgRating >= 4
            );
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap mt-6 gap-5">
      {filteredRest?.map((resData) => (
          <Link 
            key={resData.info.id} 
            to={"/restaurants/" + resData.info.id}
          >
            {resData.info.promoted ? (
              <RestaurantCardsPromoted resData={resData} />
            ) : (
              <Cards resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardsDiv;
