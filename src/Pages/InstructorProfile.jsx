import React from "react";
import { useLocation, useParams } from "react-router-dom";
// import {instructorsData} from'./Instructors'

function InstructorProfile() {
  const { id } = useParams();
  const { state } = useLocation();
  // const instructor =instructorsData.find((inst)=> inst.id ===id)

  return (
    <div>
      <div className="h-[500px] bg-gray-100">
        <div className=" flex pt-[50px] ml-[50px] mr-[50px] gap-8">
          <div>
            <p>Hey I am,</p>
            <h1 className="text-[25px] text-blue-900 font-semibold italic">{state.name}</h1>
            <p className="w-[850px]">{state.description}</p>
            <button className="w-[130px] h-[33px] bg-blue-900 rounded-[5px] mt-[20px] text-white">Contact Now</button>
            <div className="bg-white h-[95px] w-[580px] mt-[50px] ml-[20px] rounded-[10px] flex items-center justify-center gap-20 text-[20px]">
              <h1 className="flex flex-col items-center">{state.experience} Yrs <span>Experience</span></h1>
              <h1 className="flex flex-col  items-center">{state.projectsCompleted} <span>Projects Completed</span></h1>
              <h1 className="flex flex-col  items-center">{state.students} <span>Students</span></h1>
            </div>
          </div>
          <img src={state.image} alt="" className="h-[340px] w-[290px]" />
        </div>
      </div>
      <div className="h-[500px] bg-blue-950 flex justify-center gap-15 pt-[60px]">
        <img src={state.image} alt="" className="h-[340px] w-[290px]" />
        <div className="flex flex-col">
          <h1 className="text-[25px] text-white flex justify-center">About Me</h1>
          <h2 className="text-gray-300 w-[800px]">{state.about}</h2>
          <div className="mt-[100px]">
            <button className="w-[130px] h-[30px] bg-amber-600 rounded-[5px] text-white">My projects</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorProfile;
