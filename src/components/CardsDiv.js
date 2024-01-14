import { resList } from "../utils/mockData.js";
import Cards from "./Cards";
import { useState } from "react";

const CardsDiv = () => {
  const [listOfRest, setListOfRest] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
            className="all filter-btn"
            onClick={() => {
                setListOfRest(resList);
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
            setListOfRest(filteredList);
          }}
          >
          Top Rated Restaurants
        </button>
      </div>
      <div className="cards">
        {listOfRest.map((resData) => (
          <Cards key={resData.info.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default CardsDiv;
