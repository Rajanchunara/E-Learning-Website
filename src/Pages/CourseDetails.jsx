import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { FaCalendarWeek } from "react-icons/fa";
import Footer from "../Footer/Footer";


function courseDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  return (
    <div className="bg-amber-50 pt-[50px]">
      <div className=" flex gap-15 h-[330px] bg-gradient-to-b from-[#031841] to-[#0047AB] ml-[50px]  mr-[50px] rounded-t-[30px] pl-[20px] pt-[30px]">
        <div className="w-[690px] space-y-4">
          <h1 className="text-white text-[30px] font-semibold ">
            {state.course}
          </h1>
          <p className="text-white">{state.description}</p>
        </div>
        <div>
          <img src={state.image} alt="" className="h-[200px]" />
        </div>
      </div>
      <div className=" flex justify-between mb-3 bg-gray-300 rounded-b-[30px] shadow-2xl shadow-gray-700 h-[650px] ml-[50px] mr-[50px]">
        <div>
          <h1 className="text-[25px] font-semibold pt-[30px] pl-[80px]">
            About The Course
          </h1>
          <p className="w-[550px] ml-[30px] mt-[10px]">{state.about}</p>
        </div>
        <div className=" h-[550px] w-[400px] mt-[30px] mr-[100px] rounded-[20px] shadow-2xl shadow-gray-600 pl-[25px]">
          <img
            src={state.image}
            alt=""
            className="w-[350px] h-[200px] mt-[20px]  shadow-2xl shadow-gray-600 rounded-2xl"
          />

          <h1 className="flex flex-col mt-[20px] text-gray-600 font-semibold">
            Course Price{" "}
            <span className="text-blue-700 font-bold  text-[20px]">
              Rs. {state.cost}
            </span>
          </h1>
          <button className="h-[40px] w-[160px] bg-blue-900 hover:bg-blue-950 mt-[20px] text-white rounded-[20px]">ADD TO CART</button>
           <div className="mt-[20px] space-y-3">
             <h1 className="flex items-center gap-2 text-[18px] text-gray-500"><IoMdTime/> {state.time}</h1>
             <h1 className="flex items-center gap-2 text-[18px] text-gray-500"><SlCalender/> {state.duration}</h1>
             <h1 className="flex items-center gap-2 text-[18px] text-gray-500"><FaCalendarWeek/> {state.week}</h1>
           </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default courseDetails;
