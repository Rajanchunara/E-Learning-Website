import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";
import { BsListTask } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import { LuMessageSquareMore } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";

function Dashbar() {
  // const { logout, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="w-[250px] m-4 rounded-[10px] shadow-2xl shadow-gray-600  h-[830px] flex flex-col  pt-[30px]">
        <div className="font-bold">
          <div className="space-y-5 mt-[20px] pl-[20px]">
            <NavLink
              to="/dashboard"
              className="gap-2 pl-[40px] flex items-center  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <MdOutlineDashboard />
              Dashboard
            </NavLink>
            <NavLink
              to="/profile"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <CgProfile />
              My Profile
            </NavLink>

            <NavLink
              to="/mycourses"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <FaBook />
              My Courses
            </NavLink>
            <NavLink
              to="/task"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <BsListTask />
              Tasks
            </NavLink>
            <NavLink
              to="/coursevideos"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <MdOndemandVideo />
              Course Videos
            </NavLink>
            <NavLink
              to="/watchlist"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <FaRegHeart />
              Wishlist
            </NavLink>
            <NavLink
              to="/feedback"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <VscFeedback />
              Feedback
            </NavLink>
            <NavLink
              to="/messages"
              className="pl-[40px] flex items-center gap-2  w-[200px] h-[35px] rounded-2xl hover:text-white hover:bg-blue-600"
            >
              <LuMessageSquareMore />
              Messages
            </NavLink>
          </div>
          <div className="space-y-5 mt-[150px] ml-[25px] border-t-1 w-[200px] pt-[20px] pl-[40px]">
            <NavLink
              to="/settings"
              className="flex items-center gap-2 hover:text-blue-700"
            >
              <IoSettingsOutline />
              Setting
            </NavLink>

            {/* <button
              onClick={() => {
                logout();
              }}
              className="flex items-center gap-2 hover:text-blue-700"
            >
              <CiLogin />
              Log Out
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbar;
