import React from "react";
import { NavLink } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="h-[550px] bg-gradient-to-b from-[#031841] to-[#0047AB]">
        <div className="flex text-white gap-15">
          <div className="w-[300px] ml-[80px] mt-[100px]">
            <h1 className="text-gray-300">
              <span className="font-bold text-white">S.T. Tech</span> is an
              e-learning platform offering practical, engaging, and accessible
              courses designed to help students build skills and achieve their
              goals.
            </h1>
          </div>
          <div className="flex gap-15 mt-[50px]">
            <div>
              <h1 className="text-[18px] font-bold mb-[20px]">About</h1>
              <ul className="text-gray-300 space-y-2">
                <li>Blog</li>
                <li>About Us</li>
                <li>Team</li>
                <li>Instructors</li>
                <li>Privacy Policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[18px] font-bold mb-[20px]">Links</h1>
              <ul className="text-gray-300 space-y-2">
                <li>Home</li>
                <li>Dashboard</li>
                <li>FAQs</li>
                <li>Services</li>
                <li>Why Us?</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[18px] font-bold mb-[20px]">Programs</h1>
              <ul className="text-gray-300 space-y-2">
                <li>IT Courses</li>
                <li>Designing Courses</li>
                <li>Marketing Courses</li>
                <li>Business Courses</li>
                <li>Public Development Courses</li>
                <li>Creative Arts Courses</li>
              </ul>
            </div>

            <div>
              <h1 className="text-[18px] font-bold mb-[20px]">About</h1>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center gap-2">
                  <IoLocationSharp />
                  Location
                </li>
                <li className="flex items-center gap-2">
                  <BsFillTelephoneFill />
                  Call +977 9800000000
                </li>
                <li className="flex items-center gap-2">
                  <SlEnvolopeLetter />
                  example@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <MdOutlineDateRange />
                  Monday-Friday
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-b-1 border-white mt-[50px] ml-[80px] mr-[50px] p-5">
          <h1 className="text-white text-[18px] font-bold">FOLLOW US ON</h1>
          <div className="flex text-[30px] mt-[15px] gap-3">
            <NavLink
              to="https://www.facebook.com/login.php/"
              target="_blank"
              className="w-[40px] h-[40px] bg-white text-blue-700 flex items-center justify-center rounded-3xl"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/accounts/login"
              target="_blank"
              className="w-[40px] h-[40px] bg-white text-pink-500 flex items-center justify-center rounded-3xl"
            >
              <FaInstagram />
            </NavLink>
            <NavLink className="w-[40px] h-[40px] bg-white text-blue-700 flex items-center justify-center rounded-3xl">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>
        <div className="text-gray-400 ml-[80px] flex justify-between mr-[50px] mt-[30px] ">
          <h1>Refund & Return Policy</h1>
          <h2>© 2024 S.T. Tech. All rights reserved.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
