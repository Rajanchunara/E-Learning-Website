import React, { useContext } from "react";
import image1 from "../assets/Course/image.png";
import image2 from "../assets/Course/image copy.png";
import image3 from "../assets/Course/image copy 2.png";
import image4 from "../assets/Course/image copy 3.png";
import image5 from "../assets/Course/image copy 4.png";
import image6 from "../assets/Course/image copy 5.png";
import image7 from "../assets/Course/image copy 6.png";
import image8 from "../assets/Course/image copy 7.png";
import image9 from "../assets/Course/image copy 8.png";
import image10 from "../assets/Course/image copy 9.png";
import image11 from "../assets/Course/image copy 10.png";
import image12 from "../assets/Course/image copy 11.png";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import { CartContext } from "../Context/CartContext/CartProvider";
import { toast, Bounce } from "react-toastify";


const courses = [
  {
    id: 1,
    course: "UI/UX Design | 2.5 Months",
    cost: "10000",
    image: image1,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    course: "Graphic Design | 2.5 Months",
    cost: "20000",
    image: image2,
    time: "1.5 hours",
    duration: "3 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    course: "Data Science | 3 Months",
    cost: "15000",
    image: image3,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    course: "Web Development | 2.5 Months",
    cost: "25000",
    image: image4,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 5,
    course: "Project Management | 2.5 Months",
    cost: "13000",
    image: image5,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 6,
    course: "Digital Marketing | 3 Months",
    cost: "18000",
    image: image6,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 7,
    course: "Brand Management | 1.5 Months",
    cost: "12000",
    image: image7,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 8,
    course: "Public Speaking & Presentation Skills | 1 Month",
    cost: "16000",
    image: image8,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 9,
    course: "3D Modeling and Animation | 3 Months",
    cost: "20000",
    image: image9,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 10,
    course: "MERN Stack | 3 Months",
    cost: "25000",
    image: image10,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 11,
    course: "Business Analytics| 3 Months",
    cost: "10000",
    image: image11,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 12,
    course: "Business Analytics| 3 Months",
    cost: "10000",
    image: image12,
    time: "1.5 hours",
    duration: "2.5 months",
    week: "Sunday-Friday",
    description:
      "As a professional UI/UX Designer, Graphic Designer, and instructor on our e-learning platform, I bring years of experience in creating user-friendly and visually appealing designs. My courses are designed to help you master design principles, tools, and techniques, empowering you to craft exceptional digital experiences. Join me to turn your creativity into impactful designs",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function Courses() {
  const { dispatch } = useContext(CartContext);

  // const addToCart = (course) => {
  //   dispatch({ type: "AddToCart", payload: course });
  // };



  
  const handleAddToCart = (course) => {
    dispatch({ type: "AddToCart", payload: course });

    toast.success(`${course.course} is added to cart`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };




  const navigate = useNavigate();
  const viewCourse = (course) => {
    navigate(`/course/${course.id}`, { state: course });
  };

  return (
    <div className="mb-[10px]">
      <div className="bg-gray-100">
        <div className="flex justify-center pt-[50px]">
          <h1 className="text-[25px] font-medium">Our Courses</h1>
        </div>
        <div className="flex flex-wrap justify-center mt-[30px] gap-10 p-5 ">
          {courses.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white w-[250px] h-[390px] rounded-[10px]"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[240px] h-[165px] p-2"
                />
                <h1 className="w-[85px] h-[28px] bg-amber-400 rounded-2xl text-blue-800 flex justify-center items-center ml-[20px] mt-[10px]">
                  Rs.{item.cost}
                </h1>
                <h2 className="flex justify-center p-3 font-">{item.course}</h2>
                <div className="flex justify-between">
                  <button
                   onClick={() => handleAddToCart(item)}
                    className="flex items-center justify-center hover:bg-amber-700 hover:text-white gap-2 bg-amber-400 w-[135px] h-[30px] rounded-2xl ml-[20px] mt-[10px]"
                  >
                    <IoCartSharp />
                    Add to cart
                  </button>
                  <button className="text-red-600 mr-[20px]">
                    <FaRegHeart size={20} />
                  </button>
                </div>
                <button
                  onClick={() => viewCourse(item)}
                  className="w-[170px] h-[30px] border-2 border-blue-900 text-blue-700 rounded-[5px] mt-[35px] ml-[40px] hover:bg-blue-900 hover:text-white"
                >
                  View More
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
