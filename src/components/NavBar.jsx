import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

import { useState } from "react";

import Cart from "./Cart";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 fixed z-10 top-0 left-0 right-0 bg-white">
      <div className="flex items-center">
        <div
          className="cursor-pointer"
          onClick={() => setToggleNav(!toggleNav)}
        >
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
          <p className="text-2xl sm:text-3xl lg:text-4xl px-2">
            Best <span className="font-bold">Eats</span>
          </p>
        </Link>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
          <AiOutlineSearch size={25} />
          <input
            type="text"
            className="bg-transparent p-2 w-full focus:outline-none"
            placeholder="Search foods"
          />
        </div>
        <Cart />
      </div>
      {/* Overlay menu */}
      {toggleNav ? (
        <div
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setToggleNav(!toggleNav)}
        ></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          toggleNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          size={30}
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setToggleNav(!toggleNav)}
        />
        <Link to="/">
          <h2 className="text-2xl p-4">
            Best <span className="font-bold">Eats</span>
          </h2>
        </Link>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link to={nav.url} className="flex text-xl py-4">
                  <nav.icon size={25} className="mr-4" />
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
