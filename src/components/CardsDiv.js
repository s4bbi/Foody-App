import Cards from "./Cards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const CardsDiv = () => {
  let [listOfRest, setlistOfRest] = useState([]);
  let [filteredRest, setfilteredRest] = useState([])
  let [searchText, setsearchText] = useState("")


  useEffect( () => {
    fetchData();
  }, []);     

  const fetchData = async () => {
    const data = await fetch(
        "https://www.swiggy.com/api/seo/getListing?lat=28.67003492726483&lng=77.11469986756225"
    );

    const json = await data.json();

    console.log(json);
    setlistOfRest(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRest(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  return listOfRest?.length === 0 ? ( <Shimmer /> ) : (
    
    <div className="body">
      <div className="search">
            <input className="searchBar" type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
                setsearchText(e.target.value)
            }}></input>
            <button className="searchBtn btn" onClick={() => {

                console.log(searchText);
                
                let filteredRest = listOfRest.filter((res) =>
                  res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );

                
                setfilteredRest(filteredRest);

            }}>Search</button>
        </div>
      <div className="filter">
      <button
            className="all filter-btn"
            onClick={() => {
                setfilteredRest(listOfRest);
            }}
            >
            All Restaurants
        </button>
        <button
          className="top filter-btn"
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
      <div className="cards">
        {filteredRest?.map((resData) => (
          <Link key={resData.info.id} to={"/restaurants/" + resData.info.id}><Cards resData={resData} /></Link>
        ))}
      </div>
    </div>
  );
};

export default CardsDiv;
