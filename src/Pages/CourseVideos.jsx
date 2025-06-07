import React from "react";
import Dashbar from "../Dashboard/Dashbar";
import Footer from "../Footer/Footer";

function CourseVideos() {
  return (
    <div>
      <div>
        <div className="flex">
          <Dashbar />

          <div className="h-[830px] w-[1000px] m-4 rounded-[10px] shadow-2xl shadow-gray-600 ">
            <div className="flex items-center justify-between m-3">
              <h1 className=" text-[25px] font-bold">Course Videos</h1>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default CourseVideos;
