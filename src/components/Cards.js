import {CDN_URL} from "../utils/constants.js"


const Cards = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resData?.info;

    return (
        <div className="card1">
            <div className="imageDiv">
                <img className="image" 
                src={ CDN_URL + cloudinaryImageId }
            />
            </div>
        <div className="cardContent">
            <h3 className="restName">{name}</h3>
            <h4 className="cuisineName">{cuisines.join(", ")}</h4>
            <h4 className="rating">{avgRating} stars 🌟</h4>
            <h4 className="time">{resData.info.sla.deliveryTime} mins</h4>
        </div>
    </div>
    );
} 


export default Cards 