import { NavLink } from "react-router-dom";
import NavLogo from "./NavLogo";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
              : ""
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
              : ""
          }
          to="/donation">
          Donation
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
              : ""
          }
          to="/statistics">
          Statistics
        </NavLink>
      </li>
    </>
  );


  return (
    <div className="bg-base-200">

<div className="navbar absolute left-0 right-0 mx-auto z-10 max-w-7xl  ">
    <div className="navbar-start">
      <NavLink to="/">
        <NavLogo></NavLogo>
      </NavLink>
    </div>
    <div className="navbar-end">
      <ul className=" gap-4 text-lg  menu-horizontal px-1 hidden lg:flex">
        {links}
      </ul>
      {/* dropdown */}
    
      <div className="dropdown  dropdown-end">
        <div tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NavLink className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
          : ""
      }
      to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
          : ""
      }
      to="/donation">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              Donation
            </NavLink>
          </li>
    
          <li>
            <NavLink className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? "text-primary-color text-lg font-bold underline hover:bg-primary-color hover:text-white"
          : ""
      }
      to="/statistics">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Statistics
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </div>

    </div>
  );
};

export default Navbar;

