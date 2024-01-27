import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {

    const dispatch = useDispatch()

    const removeCartItem = (itemId) => {
        dispatch(removeItem(itemId))
    } 

    const clearCartItems = () => {
        dispatch(clearCart())
    }

  const cartItems = useSelector((store) => store.cart.items);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, item) => {
      return total + (item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100);
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  return (
    <div className="text-center pt-8 w-6/12 mx-auto">
      <h1 className="text-2xl font-bold pb-1">Your Cart Items</h1>
      <div className="flex justify-around text-sm py-3">
        <Link to={"/"}>
          <button className="rounded-lg bg-black text-white p-2 m-2">Add more Items</button>
        </Link>
        <button className="rounded-lg bg-black text-white p-2 m-2" onClick={clearCartItems}>Clear Cart</button>
    
      </div>

      {totalPrice === 0 ? <h1>Your Cart is Empty!</h1> :

      <div>
        {cartItems?.map((item) => (
          <div key={item.card.info.id} className="py-2 my-2 border-b-2">
            <div className="flex justify-between">
              <span className="flex text-l font-regular">{item?.card?.info?.name}</span>
              <button className="rounded-lg py-2 my-2 text-red-500" onClick={() => removeCartItem (item?.card?.info?.id)}>Remove Item</button>
            </div>
            <span className="text-sm font-regular pt-1 flex text-start">₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
          </div>
        ))}
        <div className="flex justify-between text-xl font-semibold">
          <h1>Total:</h1>
          <h2>₹ {totalPrice}</h2>
        </div>
      </div>
}
    </div>

  );
};

export default Cart;
