import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux"

const ItemList = ({ items }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  return (
    <div>
      {items?.map(item => (
        <div key={item.card.info.id} className="flex py-2 my-2 border-b-2 text-left items-start">
          <div className="flex-grow w-9/12">
            <span className="flex text-l font-regular">{item.card.info.name}</span>
            <span className="text-sm font-regular pt-1">₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
            <p className="text-xs py-2 font-light text-gray-400">{item.card.info.description}</p>
          </div>
            <div className="w-2/12">       
                <button className="border border-gray p-2 shadow-xl absolute bg-white" onClick={() => handleAddItem(item)}>ADD +</button>
                <img src={CDN_URL + item?.card?.info?.imageId} alt="Item Image" />

            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
