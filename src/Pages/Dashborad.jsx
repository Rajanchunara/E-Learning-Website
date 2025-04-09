import React from "react";
import Dashbar from "../Dashboard/Dashbar";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";
import image from "../assets/Dashboard/image.png";
import { SlBookOpen } from "react-icons/sl";
import { FaGraduationCap } from "react-icons/fa";
import { GoTrophy } from "react-icons/go";
import Footer from "../Footer/Footer";

function Dashborad() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="flex">
        <Dashbar />
        <div className="h-[830px] w-[1000px] m-4 rounded-[10px] shadow-2xl shadow-gray-600 ">
          <div className="flex items-center justify-between m-3">
            <h1 className=" text-[25px] font-bold">Dashboard</h1>
            <div>
              {isAuthenticated ? (
                <NavLink
                  to="/profile"
                  className="flex items-center gap-4 text-blue-900 font-medium"
                >
                  <h1>{user.name}</h1>
                  <img
                    src={user.picture}
                    alt=""
                    className="rounded-full h-10"
                  />
                </NavLink>
              ) : (
                <FaUser size={25} className="mt-2.5" />
              )}
            </div>
          </div>
          <div className="h-[320px] m-5 mt-[40px]  rounded-[10px] bg-gradient-to-l from-yellow-400 to-blue-800 pl-[20px] pt-[20px] flex">
            <div>
              <h1 className="text-[25px] text-white ">WELCOME!</h1>
              {isAuthenticated ? (
                <div className="flex justify-between pr-[20px]">
                  <h1 className="text-[20px] text-white font-medium">
                    {user.name}
                  </h1>
                </div>
              ) : (
                <div></div>
              )}
              <div className="w-[530px] h-[65px] text-white mt-[20px] flex">
                <p>
                  We’re excited to have you here. Dive into your learning
                  journey and make progress toward your goals. Remember, every
                  step counts! Check your tasks for today and continue where you
                  left off. Let’s make this a productive session!
                </p>
              </div>
            </div>
            <img src={image} alt="" className="w-[285px]" />
          </div>

          <div className="flex justify-between p-5">
            <div className="border-1 border-gray-400 w-[250px] h-[250px] rounded-[5px] flex flex-col items-center text-[18px] gap-7">
              <div className="h-[85px] w-[85px] bg-gray-300 flex justify-center items-center rounded-full mt-[20px]">
                <SlBookOpen className="w-[42px] h-[32px]" />
              </div>
              <h1>1</h1>
              <p className="font-medium">Enrolled Courses</p>
            </div>

            <div className="border-1 border-gray-400 w-[250px] h-[250px] rounded-[5px] flex flex-col items-center text-[18px] gap-7">
              <div className="h-[85px] w-[85px] bg-gray-300 flex justify-center items-center rounded-full mt-[20px]">
                <FaGraduationCap className="w-[42px] h-[32px]" />
              </div>
              <h1>1</h1>
              <p className="font-medium">Active Courses</p>
            </div>

            <div className="border-1 border-gray-400 w-[250px] h-[250px] rounded-[5px] flex flex-col items-center text-[18px] gap-7">
              <div className="h-[85px] w-[85px] bg-gray-300 flex justify-center items-center rounded-full mt-[20px]">
                <GoTrophy className="w-[42px] h-[32px]" />
              </div>
              <h1>0</h1>
              <p className="font-medium">Completed Courses</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashborad;
