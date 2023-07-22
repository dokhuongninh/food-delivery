import { BsFillCartFill } from "react-icons/bs";

import { useState } from "react";

import { useShoppingCart } from "../context/ShoppingCartContext";

const Cart = () => {
  const [toggleCart, setToggleCart] = useState(false);
  const { cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      <button
        className="bg-black text-white hidden sm:flex items-center py-2 rounded-full hover:text-orange-500 hover:bg-white hover:border-black-100 text-xl relative group"
        onClick={() => setToggleCart(!toggleCart)}
      >
        <BsFillCartFill size={35} className="mr-2" />
        Cart
        <span className="rounded-full absolute left-[50%] bottom-[-28px] translate-x-[-50%] bg-orange-500 p-2 min-h-[30px] min-w-[45px] group-hover:bg-white group-hover:text-orange-500 group-hover:border-black">
          {cartQuantity || "0"}
        </span>
      </button>

      {toggleCart ? (
        <div
          className="bg-transparent fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setToggleCart(!toggleCart)}
        ></div>
      ) : (
        ""
      )}

      {toggleCart ? (
        <div className="fixed z-10 top-0 right-0 bg-white h-screen max-w-[300px] w-full border-l-2 border-l-orange-100"></div>
      ) : (
        ""
      )}
    </>
  );
};

export default Cart;
