import { NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLinks } from "./NavLinks";
import { useState } from "react";

const getInitialDarkTheme = () => {
  const newDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const storedTheme = localStorage.getItem("darkTheme");
  console.log("Stored Theme : ", storedTheme);
  if (storedTheme == null) {
    return newDarkTheme;
  }
  return storedTheme === "true";
};

export default function Navbar() {
  const [isDarkTheme, setDarkTheme] = useState(getInitialDarkTheme());
  const handleChange = () => {
    const newThemeColor = !isDarkTheme;
    setDarkTheme(newThemeColor);
    localStorage.setItem("darkTheme", newThemeColor);
  };

  return (
    <nav className="bg-base-200">
      <div className="align-element navbar">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="btn btn-primary hidden items-center text-3xl lg:flex"
          >
            S
          </NavLink>
          <div className="dropdown">
            <div tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="size-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-200 p-2 shadow"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {/* NAVLINKS */}
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleChange} />
            <BsSunFill className="swap-on size-6" />
            <BsMoonFill className="swap-off size-6" />
          </label>
          {/* CART ICON */}
          <NavLink to="/cart" className="btn btn-circle btn-ghost btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="size-6" />
              <span className="badge indicator-item badge-primary badge-sm">
                4
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
