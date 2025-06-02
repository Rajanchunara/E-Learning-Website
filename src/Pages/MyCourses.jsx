import React, { useContext } from "react";
import Dashbar from "../Dashboard/Dashbar";
import { CartContext } from "../Context/CartContext/CartProvider";
import { IoCartSharp } from "react-icons/io5";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function MyCourses() {
  const { state, dispatch } = useContext(CartContext);
  const { myCourses } = state;

    
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
    <div>
      <div className="flex">
        <Dashbar />

        <div className="h-[830px] w-[1000px] m-4 rounded-[10px] shadow-2xl shadow-gray-600 ">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">My Courses</h1>
            {myCourses.length === 0 ? (
              <p>No courses added yet.</p>
            ) : (
              <div>
                <div className="flex flex-wrap  justify-center mt-[30px] gap-10 p-5 ">
                  {myCourses.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="bg-white w-[250px] shadow-2xl shadow-gray-600 h-[410px] rounded-[10px]"
                      >
                        <img
                          src={item.image}
                          alt=""
                          className="w-[240px] h-[165px] p-2"
                        />
                        <h1 className="w-[85px] h-[28px] bg-amber-400 rounded-2xl text-blue-800 flex justify-center items-center ml-[20px] mt-[10px]">
                          Rs.{item.cost}
                        </h1>
                        <h2 className="flex justify-center p-3 font-">
                          {item.course}
                        </h2>
                        <div className="flex justify-between">
                          <button
                            onClick={() => handleAddToCart(item)}
                            className="flex items-center justify-center hover:bg-amber-700 hover:text-white gap-2 bg-amber-400 w-[135px] h-[30px] rounded-2xl ml-[20px] mt-[10px]"
                          >
                            <IoCartSharp />
                            Add to cart
                          </button>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                          <button
                            onClick={() => viewCourse(item)}
                            className="w-[170px] h-[30px] border-2 border-blue-900 text-blue-700 rounded-[5px] mt-[25px] hover:bg-blue-900 hover:text-white"
                          >
                            View More
                          </button>

                          <button
                            onClick={() =>
                              dispatch({
                                type: "RemoveMyCourse",
                                payload: { id: item.id },
                              })
                            }
                            className="w-[100px] h-[30px] text-red-600 rounded-[5px] mt-[10px] hover:text-red-800"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
