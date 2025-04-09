import React from "react";
import { NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";


function Navigation() {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="flex items-center gap-15 p-2.5 h-20 bg-amber-300 ">
        <div className="space-x-5 ml-[100px]">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </NavLink>
          <NavLink to="/courses" className="hover:text-blue-500">
            Courses
          </NavLink>
          <NavLink to="/instructors" className="hover:text-blue-500">
            Instructors
          </NavLink>
          <NavLink to="/aboutus" className="hover:text-blue-500">
            About Us
          </NavLink>
          <NavLink to="/more" className="hover:text-blue-500">
            More
          </NavLink>
        </div>
        <div className=" flex justify-end items-end space-x-4">
          <NavLink className=" bg-amber-50 h-[35px] text-[15px] rounded-[50px] flex justify-center items-center p-1.5">
            <input type="text" placeholder="Search for anything" />
            <CiSearch />
          </NavLink>
          <NavLink className="hover:text-blue-700">
            <IoCartSharp size={30} />
          </NavLink>
          <NavLink className="hover:text-blue-700">
            <FaRegHeart size={30} />
          </NavLink>

          {isAuthenticated ? (
            <NavLink to="/profile" className='flex items-center gap-2 text-blue-900 font-medium'>
              <img src={user.picture} alt="" className="rounded-full h-10" />
              <h1>{user.name}</h1>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-blue-500 border-[1px] border-amber-50 h-[35px] hover:bg-blue-500 hover:text-white w-[80px] flex items-center justify-center rounded-[10px]"
            >
              Login
            </NavLink>
          )}


          <NavLink
            to="/register"
            className=" bg-blue-600 text-white w-[85px] flex justify-center items-center h-[35px] rounded-[10px] hover:bg-blue-900"
          >
            Register
          </NavLink>



          <NavLink className="hover:text-blue-700">
            <BsGlobe size={30} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
