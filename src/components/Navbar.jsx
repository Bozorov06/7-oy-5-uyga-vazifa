import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { currentUser } = useSelector((state) => state.auth);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container border-b-2 border-primary flex justify-between items-center py-3">
      <a href="/" className="flex items-center gap-5 text-primary">
        <img src={logo} alt="logoimg" />
        <div>
          <span className="block text-3xl font-semibold">Red Clothes</span>
          <span className="text-sm">Магазин одежды для практики </span>
        </div>
      </a>
      <div className="flex gap-5 items-center text-primary text-2xl">
        <Link to="/cart" className="relative flex items-center">
          <i className="fa me-2 fa-shopping-cart"></i>
          <span>{totalPrice.toLocaleString()} ₽</span>
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>
        <Link to="/wishlist">
          <i className="fa-regular fa-heart"></i>
        </Link>

        {currentUser ? (
          <Link to = '/login'>{currentUser.name}</Link>
        ) : (
          <Link to="/login">
            <i className="fa-regular fa-user"></i>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
