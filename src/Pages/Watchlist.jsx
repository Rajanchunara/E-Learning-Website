import React from "react";
import Dashbar from "../Dashboard/Dashbar";
import image from '../assets/Watchlist/image.png'
import Footer from "../Footer/Footer";
function Watchlist() {
  return (
    <div>
      <div className="flex">
        <Dashbar />

        <div className="h-[830px] w-[1000px] m-4 rounded-[10px] shadow-2xl shadow-gray-600 ">
          <div className="flex items-center justify-between m-3">
            <h1 className=" text-[25px] font-bold">My Watchlist</h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-[40px] gap-5">
            <img src={image} alt=""  className="h-[350px] w-[350px]"/>
            <h1 className="text-[25px]">Empty wishlist</h1>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Watchlist;
