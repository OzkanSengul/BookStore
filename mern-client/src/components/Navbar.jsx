import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);
  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/", index: 1 },
    { link: "Shop", path: "/shop", index: 2 },
    { link: "About", path: "/about", index: 3 },
    { link: "Blog", path: "/blog", index: 4 },
    { link: "Sell Your Book", path: "/admin/dashboard", index: 5 },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-50 ">
      <nav
        className={`container mx-auto px-6 py-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaBlog className="inline-block" />
            Books
          </Link>
          {/* Nav item for large device */}
          <ul className="md:flex hidden space-x-12 ">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="inline-block ml-6 text-blue-700 hover:text-blue-900"
              >
                <Link to={item.path}>{item.link}</Link>
              </li>
            ))}
          </ul>
          {/* button for lg devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FaBarsStaggered className="text-2xl text-blue-700" />
            </button>
          </div>

          {/* Nav item for mobile device */}
          <div className="md:hidden">
            <button
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              {" "}
              {isMenuOpen ? (
                <FaXmark className="h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className="h-5 w-5 text-black" />
              )}
            </button>
          </div>

          {/* Mobile menu */}

          <div
            className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
              isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
            } `}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block md:hidden text-white hover:text-black uppercase cursor-pointer"
              >
                {item.link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
