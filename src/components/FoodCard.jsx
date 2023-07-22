import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

import { useShoppingCart } from "../context/ShoppingCartContext";

const FoodCard = (data) => {
  const { id, image, name, price } = data.data;

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer relative">
      <div>
        <img
          src={image}
          alt={name}
          className="w-full h-[200px] object-cover rounded-t-lg"
        />
        <div className="flex justify-between px-2 py-4">
          <p className="font-bold">{name}</p>
          <p>
            <span className="bg-orange-500 text-white px-2 py-1 rounded-full">
              {price}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute z-10 top-0 bottom-0 right-0 left-0 opacity-0 hover:opacity-100 hover:bg-gray-500/60 flex justify-center items-center text-6xl text-white font-semibold">
        {quantity === 0 ? (
          <button
            className="px-2 py-1 font-bold bg-orange-500 text-white text-center outline-none text-xl border-none rounded-full"
            onClick={() => increaseCartQuantity(id)}
          >
            ADD TO CART
          </button>
        ) : (
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center text-4xl gap-3 w-full">
              <AiOutlineMinusSquare
                size={50}
                onClick={() => decreaseCartQuantity(id)}
              />
              {quantity}
              <AiOutlinePlusSquare
                size={50}
                onClick={() => increaseCartQuantity(id)}
              />
            </div>
            <button
              className="mt-4 px-9 py-1 font-bold bg-orange-500 text-white text-center  outline-none text-xl border-none rounded-full"
              onClick={() => removeFromCart(id)}
            >
              REMOVE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
