import React from "react";
import { useLocation, useParams } from "react-router-dom";

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
      <div className=" flex justify-between bg-gray-300 rounded-b-[30px] shadow-2xl shadow-gray-700 h-[600px] ml-[50px] mr-[50px]">
        <div>
          <h1 className="text-[25px] font-semibold pt-[30px] pl-[80px]">
            About The Course
          </h1>
          <p className="w-[550px] ml-[30px] mt-[10px]">{state.about}</p>
        </div>
        <div className=" h-[500px] w-[400px] mt-[30px] mr-[100px] rounded-[20px] shadow-2xl shadow-gray-600">

        </div>
      </div>
    </div>
  );
}

export default courseDetails;
