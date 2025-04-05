import React from "react";
import image from "../assets/Home/image.png";
import image1 from "../assets/Home/image copy.png";
import image2 from "../assets/Home/image copy 2.png";
import image3 from "../assets/Home/image copy 3.png";
import image4 from "../assets/Home/image copy 4.png";
import image5 from "../assets/Home/image copy 5.png";
import image6 from "../assets/Home/image copy 6.png";
import image7 from "../assets/Home/image copy 7.png";
import image8 from "../assets/Home/image copy 8.png";
import image9 from "../assets/Home/image copy 9.png";
import image10 from "../assets/Home/image copy 10.png";
import image11 from "../assets/Home/image copy 11.png";
import image12 from "../assets/Home/image copy 12.png";
import image13 from "../assets/Home/image copy 13.png";
import image14 from "../assets/Home/image copy 14.png";
import image15 from "../assets/Home/image copy 15.png";
import image16 from "../assets/Home/image copy 16.png";
import star from "../assets/Home/star.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";

function Home() {
  return (
    <div>
      <div className="h-[580px] w-full bg-blue-950 flex pt-[100px] pl-[50px] absolute -z-50">
        <div className="w-[700px] space-y-5">
          <h1 className="text-white text-[40px] flex flex-col">
            Empower Your Future with New Skills{" "}
            <span>- Learn Anytime, Anywhere!</span>
          </h1>
          <p className="text-white text-[18px]">
            Unlock your potential with our diverse courses! Learn at your own
            pace with expert-led lessons, and gain the skills you need to excel
            in your chosen field. Start today!
          </p>
          <button className="text-blue-950 font-bold text-[14px] bg-amber-400 w-[100px] rounded-[4px]">
            Join Now
          </button>
        </div>
        <div>
          <img src={image} alt="" className="h-[300px]" />
        </div>
      </div>

      <div className="z-50 relative top-[400px] h-[870px]">
        <div className="h-[300px] bg-white shadow-2xl shadow-gray-600 rounded-tl-[145px] rounded-br-[145px] flex justify-center items-center gap-x-8 ">
          <div className="h-[175px] w-[265px] bg-blue-700 rounded-[10px] flex justify-center items-center gap-x-2.5 text-white p-2 shadow-2xl shadow-black">
            <img src={image1} alt="" className="h-[85px] " />
            <p>
              100+ <span>INSTRUCTORS</span>
            </p>
          </div>
          <div className="h-[175px] w-[265px] bg-blue-700 rounded-[10px] flex justify-center items-center gap-x-2.5 text-white p-2 shadow-2xl shadow-black">
            <img src={image2} alt="" className="h-[85px] " />
            <p className="w-[50px]">
              500+ <span>COURSES</span>
            </p>
          </div>
          <div className="h-[175px] w-[265px] bg-blue-700 rounded-[10px] flex justify-center items-center gap-x-2.5 text-white p-2 shadow-2xl shadow-black">
            <img src={image3} alt="" className="h-[85px] " />
            <p>
              100+ <span>INSTRUCTORS</span>
            </p>
          </div>
          <div className="h-[175px] w-[265px] bg-blue-700 rounded-[10px] flex justify-center items-center gap-x-4 text-white p-2 shadow-2xl shadow-black">
            <img src={image4} alt="" className="h-[85px] " />
            <p>
              100+ <span>INSTRUCTORS</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-300 h-[150px] flex flex-col justify-center items-center gap-y-3">
          <h1 className="font-bold text-[27px]">Why Choose Us</h1>
          <p className="text-[18px]">
            We offer high-quality courses, expert instructors, and flexible
            learning, empowering you to learn at your own pace and achieve your
            goals.
          </p>
        </div>
      </div>

      <div className="h-[520px] flex items-center">
        <div className="h-[380px] w-[500px]">
          <img src={image5} alt="" />
        </div>

        <div className="space-y-15">
          <div className="flex gap-8 ml-[100px]">
            <div className="h-[180px] w-[280px] bg-blue-950 rounded-[10px] space-y-5 flex flex-col justify-center pl-[20px]">
              <div className="flex gap-5">
                <img src={image6} alt="" className="w-[32px]" />
                <h1 className="text-white font-bold">Diverse Course Options</h1>
              </div>
              <p className="text-white">
                Something for everyone, from beginners to advanced learners.
              </p>
            </div>
            <div className="h-[180px] w-[280px] bg-blue-950 rounded-[10px] space-y-5 flex flex-col justify-center pl-[20px]">
              <div className="flex gap-5">
                <img src={image7} alt="" className="w-[32px]" />
                <h1 className="text-white font-bold">Affordable Pricing</h1>
              </div>
              <p className="text-white">
                Access to free resources and trial courses.
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="h-[180px] w-[280px] bg-blue-950 rounded-[10px] space-y-5 flex flex-col justify-center pl-[20px]">
              <div className="flex gap-5">
                <img src={image8} alt="" className="w-[32px]" />
                <h1 className="text-white font-bold">Flexible Learning</h1>
              </div>
              <p className="text-white">
                Access courses anytime, anywhere, at your own pace.
              </p>
            </div>
            <div className="h-[180px] w-[280px] bg-blue-950 rounded-[10px] space-y-5 flex flex-col justify-center pl-[20px]">
              <div className="flex gap-5">
                <img src={image9} alt="" className="w-[32px]" />
                <h1 className="text-white font-bold">
                  Certification of Completion
                </h1>
              </div>
              <p className="text-white">
                Earn a certificate to showcase your skills and achievements.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200">
        <h1 className="font-bold text-[20px] flex justify-center pt-[20px]">
          OUR TEAM
        </h1>

        <div className="flex gap-6 p-5">
          <div className="h-[360px] w-[290px] bg-blue-950 rounded-[5px] flex flex-col justify-center items-center">
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

          <div className="h-[360px] w-[290px] bg-blue-950 rounded-[5px] flex flex-col justify-center items-center">
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

          <div className="h-[360px] w-[290px] bg-blue-950 rounded-[5px] flex flex-col justify-center items-center">
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

          <div className="h-[360px] w-[290px] bg-blue-950 rounded-[5px] flex flex-col justify-center items-center">
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
        <div className="flex flex-col justify-center items-center mt-[20px] gap-y-3">
          <h1 className="text-[25px] font-bold">Testimonials</h1>
          <p className="text-[18px] flex flex-col items-center">
            “Hear from our students! Discover how our courses have empowered
            learners to achieve their goals and unlock new opportunities.
            <span>Real stories, real success!”</span>
          </p>
        </div>

        <div className="flex justify-center gap-10">
          <div className="p-4 h-[500px] mt-[40px]">
            <div className="absolute left-[200px]">
              <img src={image14} alt="" className="h-[150px]" />
            </div>
            <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[280px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
              <img src={star} alt="" className="w-[150px]" />
              <h1 className="text-[25px] text-blue-500">James Smith</h1>
              <h3 className="text-[15px]">Student</h3>
              <p className="mt-[30px] ml-[10px]">
                “Amazing platform! The lessons are clear, and the instructors
                are top-notch.”
              </p>
            </div>
          </div>

          <div className="p-4 h-[500px] mt-[40px]">
            <div className="absolute left-[560px]">
              <img src={image15} alt="" className="h-[150px]" />
            </div>
            <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[280px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
              <img src={star} alt="" className="w-[150px]" />
              <h1 className="text-[25px] text-blue-500">Miller Bolt</h1>
              <h3 className="text-[15px]">Student</h3>
              <p className="mt-[30px] ml-[10px]">
                “The course exceeded my expectations. I can't wait to take
                another one!”
              </p>
            </div>
          </div>

          <div className="p-4 h-[500px] mt-[40px]">
            <div className="absolute left-[900px]">
              <img src={image16} alt="" className="h-[150px]" />
            </div>
            <div className="bg-white shadow-2xl rounded-[10px] h-[360px] w-[280px] flex flex-col items-center mt-[70px] pt-[100px] gap-y-2">
              <img src={star} alt="" className="w-[150px]" />
              <h1 className="text-[25px] text-blue-500">Nancy Smith</h1>
              <h3 className="text-[15px]">Student</h3>
              <p className="mt-[30px] ml-[10px]">
                “The courses are well-structured and easy to follow. I learned
                so much!”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[550px] bg-blue-800">
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

export default Home;
