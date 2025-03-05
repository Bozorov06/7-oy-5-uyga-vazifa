import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../lib/slices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-1">
        <h2 className="text-4xl font-bold mb-5">Savatcha </h2>
        <i className="fa me-2 text-3xl fa-shopping-cart"></i>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-3xl text-primary font-bold">
          Savatchada hech narsa topilmadi...
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg flex flex-col items-center hover:border-primary border border-transparent shadow-2xl focus-visible:scale-x-75"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 h-40 object-contain mb-3"
                />
                <h3 className="text-lg font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-primary font-bold mt-2">{item.price} ₽</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="mt-3 px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  O'chirish
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-2xl font-semibold text-emerald-800 p-3 flex gap-2">
            <strong>Jami: </strong>
            <p className=" text-2xl font-black">
              {cartItems
                .reduce((acc, item) => acc + item.price, 0)
                .toLocaleString()}
              ₽
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
