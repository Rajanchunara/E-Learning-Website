import React from "react";
import image from "../assets/About/image.png";
import image1 from "../assets/About/image copy.png";
import image2 from "../assets/About/image copy 2.png";
import image3 from "../assets/About/image copy 3.png";
import image10 from "../assets/Home/image copy 10.png";
import image11 from "../assets/Home/image copy 11.png";
import image12 from "../assets/Home/image copy 12.png";
import image13 from "../assets/Home/image copy 13.png";
import image14 from "../assets/Home/image copy 14.png";
import image15 from "../assets/Home/image copy 15.png";
import image16 from "../assets/Home/image copy 16.png";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";

function AboutUs() {
  return (
    <div>
      <div className="h-[600px]">
        <div className="h-[400px] gap-5 bg-gradient-to-b from-blue-900 to-blue-300 flex flex-col items-center absolute w-full -z-50">
          <h1 className="text-[25px] text-white font-bold mt-[70px]">
            About Us
          </h1>
          <p className="text-white text-[15px] w-[1000px]">
            Welcome to S.T. Tech, where learning meets innovation. Our mission
            is to make quality education accessible to everyone, everywhere.
            With a wide range of expert-designed courses and interactive
            learning tools, we empower individuals to achieve their goals and
            thrive in their careers. Join our growing community of learners and
            discover a world of knowledge tailored just for you!
          </p>
        </div>
        <div className="flex gap-8 justify-center items-center relative top-[290px] ">
          <img src={image} alt="" className="h-[250px]" />
          <img src={image1} alt="" className="h-[180px]" />
          <img src={image} alt="" className="h-[250px]" />
          <img src={image1} alt="" className="h-[180px]" />
        </div>
      </div>
      <div className="ml-[80px] space-y-4">
        <h1 className="text-[25px] font-bold">Mission</h1>
        <p className="w-[650px] border-l-2 border-amber-500 pl-[5px] ml-[10px]">
          To empower individuals through accessible, high-quality education that
          fosters personal growth, professional development, and lifelong
          learning. We aim to break barriers to education by delivering
          innovative, engaging, and practical learning experiences to learners
          worldwide.
        </p>
      </div>

      <div className="flex mt-[50px] ml-[80px] gap-x-10 ">
        <img src={image2} alt="" className="h-[330px]" />
        <div className="space-y-4">
          <h1 className="text-[25px] font-bold">Vision</h1>
          <p className="w-[600px] border-l-2 border-amber-500 pl-[5px] ml-[10px]">
            To be a global leader in e-learning, transforming lives by making
            education universally available, bridging the gap between knowledge
            and opportunity, and nurturing a community of empowered, skilled,
            and confident individuals.
          </p>
        </div>
      </div>

      <div className="h-[620px] mt-[50px] brightness-80">
        <img src={image3} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-bold">Success Stories</h1>
        <p>From a small team to a global platform</p>
      </div>

      <div className="flex justify-center gap-10">
        <div className="p-4 h-[500px] mt-[40px]">
          <div className="absolute left-[200px]">
            <img src={image14} alt="" className="h-[150px]" />
          </div>
          <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[300px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
            <h1 className="text-[25px] text-blue-500">James Smith</h1>
            <p className="mt-[10px] p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="p-4 h-[500px] mt-[40px]">
          <div className="absolute left-[560px]">
            <img src={image15} alt="" className="h-[150px]" />
          </div>
          <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[300px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
            <h1 className="text-[25px] text-blue-500">Miller Bolt</h1>
            <p className="mt-[10px] p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <div className="p-4 h-[500px] mt-[40px]">
          <div className="absolute left-[900px]">
            <img src={image16} alt="" className="h-[150px]" />
          </div>
          <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[300px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
            <h1 className="text-[25px] text-blue-500">Nancy Smith</h1>
            <p className="mt-[10px] p-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-5">
        <div className="h-[360px] w-[290px] bg-gradient-to-b from-blue-500 to-blue-950 rounded-[5px] flex flex-col justify-center items-center">
          <img src={image10} alt="" className="h-[160px]" />
          <h1 className="text-[25px] text-white mt-[10px]">Henry Smith</h1>
          <p className="text-[15px] text-white">Founder</p>
          <div className="text-yellow-300 flex gap-3 text-[30px] mt-[30px]">
            <NavLink
              to="https://www.facebook.com/login.php/"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/accounts/login"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </NavLink>
            <NavLink className="hover:text-white">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>

        <div className="h-[360px] w-[290px] bg-gradient-to-b from-blue-500 to-blue-950 rounded-[5px] flex flex-col justify-center items-center">
          <img src={image11} alt="" className="h-[160px]" />
          <h1 className="text-[25px] text-white mt-[10px]">Nancy White</h1>
          <p className="text-[15px] text-white">Manager</p>
          <div className="text-yellow-300 flex gap-3 text-[30px] mt-[30px]">
            <NavLink
              to="https://www.facebook.com/login.php/"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/accounts/login"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </NavLink>
            <NavLink className="hover:text-white">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>

        <div className="h-[360px] w-[290px] bg-gradient-to-b from-blue-500 to-blue-950 rounded-[5px] flex flex-col justify-center items-center">
          <img src={image12} alt="" className="h-[160px]" />
          <h1 className="text-[25px] text-white mt-[10px]">Devid Miller</h1>
          <p className="text-[15px] text-white">Manager</p>
          <div className="text-yellow-300 flex gap-3 text-[30px] mt-[30px]">
            <NavLink
              to="https://www.facebook.com/login.php/"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/accounts/login"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </NavLink>
            <NavLink className="hover:text-white">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>

        <div className="h-[360px] w-[290px] bg-gradient-to-b from-blue-500 to-blue-950 rounded-[5px] flex flex-col justify-center items-center">
          <img src={image13} alt="" className="h-[160px]" />
          <h1 className="text-[25px] text-white mt-[10px]">Perry Bella</h1>
          <p className="text-[15px] text-white">Designer</p>
          <div className="text-yellow-300 flex gap-3 text-[30px] mt-[30px]">
            <NavLink
              to="https://www.facebook.com/login.php/"
              target="_blank"
              className="hover:text-blue-200"
            >
              <FaFacebook />
            </NavLink>
            <NavLink
              to="https://www.instagram.com/accounts/login"
              target="_blank"
              className="hover:text-pink-400"
            >
              <FaInstagram />
            </NavLink>
            <NavLink className="hover:text-white">
              <FaLinkedin />
            </NavLink>
          </div>
        </div>
      </div>

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

export default AboutUs;
