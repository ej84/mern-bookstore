import { Link } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";
import avatar from "../assets/avatar.png";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/order",
  },
  {
    name: "Cart",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  //console.log(isDropdownOpen);

  const currentUser = true;

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* Search input */}
          <div className="relative w-40 sm:w-72 space-x-2">
            <IoSearchOutline className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full px-6 py-1 md:px-8 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* Right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatar}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* Show dropdowns */}
                {isDropdownOpen && (
                  <div>
                    <ul>
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <Link to={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>

          <Link
            to="/cart"
            className="bg-primary p-1 px-2 sm:px-6 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            <span className="text-sm font-semibold ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
