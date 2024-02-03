import {CDN_URL} from "../utils/constants.js"

const Cards = (props) => {
    const { resData } = props;

    console.log(resData);

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
    } = resData?.info;

    return (
        <div className="w-64 bg-gray-100 rounded-xl p-3 hover:scale-[1.05] transition ease-in-out">
            <div>
                <img className="rounded-xl h-40 w-full object-cover" 
                src={ CDN_URL + cloudinaryImageId }
            />
            </div>
        <div>
            <h3 className="font-bold my-3 text-lg">{name}</h3>
            <h4 className="mb-2">{cuisines.join(", ")}</h4>
            <h4 className= "mb-2">{avgRating} stars 🌟</h4>
            <h4 className="mb-2">{resData.info.sla.deliveryTime} mins</h4>
        </div>
    </div>
    );
} 

export const withPromotedLabel = (Cards) => {
    return (props) => {
        return (
            <div> 
                <label className="absolute bg-black text-white rounded-lg p-1  "> Promoted </label>
                <Cards {...props}/>
            </div>
        )
    }
}

export default Cards 