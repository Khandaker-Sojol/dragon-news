import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { Outcome } from "firebase/ai";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("User trying to log Out");
    logOut()
      .then(() => {
        toast.success("Sign-out successful.", {
          position: "top-center",
        });
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/career">Career</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar py-4">
      <div>{user && user.email}</div>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#706F6F] text-lg"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#706F6F] text-lg">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <img className="w-13" src={userImg} alt="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-[#403F3F] px-12 py-3 text-white font-semibold text-xl cursor-pointer"
          >
            LogOut
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="bg-[#403F3F] px-12 py-3 text-white font-semibold text-xl cursor-pointer"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
