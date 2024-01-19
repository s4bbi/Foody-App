import Cards from "./Cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const CardsDiv = () => {
  let [listOfRest, setlistOfRest] = useState([]);
  let [filteredRest, setfilteredRest] = useState([])
  let [searchText, setsearchText] = useState("")


  useEffect( () => {
    fetchData();
  }, []);     

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=19.0759837&lng=72.8776559"
    );

    const json = await data.json();

    setlistOfRest(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants ?? {});
    setfilteredRest(json?.data?.success?.cards[1].gridWidget?.gridElements?.infoWithStyle?.restaurants ?? {});
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return ( 
        <h1>Looks like you are Offline 😿, try checking your connection.</h1>
    );
  }
  
  return listOfRest?.length === 0 ? ( <Shimmer /> ) : (
    
    <div className="mx-16">
      <div className="search my-5 mx-auto flex justify-center">
            <input className="w-96 h-10 border border-solid rounded-lg p-2" type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
                setsearchText(e.target.value)
            }}></input>
            <button className="border border-solid bg-yellow rounded-lg p-2" onClick={() => {

                console.log(searchText);
                
                let filteredRest = listOfRest.filter((res) =>
                  res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );

                
                setfilteredRest(filteredRest);

            }}>Search</button>
        </div>
      <div className="flex justify-center">
      <button
            className="h-10 border rounded-lg px-4 mx-4 transition duration-150 ease-in-out hover:bg-yellow hover:scale-[1.05]"
            onClick={() => {
                setfilteredRest(listOfRest);
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
            setfilteredRest(filteredList);
          }}
          >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap mt-6 gap-5">
        {filteredRest?.map((resData) => (
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}><Cards resData={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default CardsDiv;
