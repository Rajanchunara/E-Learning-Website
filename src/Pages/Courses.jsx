import React from 'react'
import image1 from '../assets/Course/image.png'
import image2 from '../assets/Course/image copy.png'
import image3 from '../assets/Course/image copy 2.png'
import image4 from '../assets/Course/image copy 3.png'
import image5 from '../assets/Course/image copy 4.png'
import image6 from '../assets/Course/image copy 5.png'
import image7 from '../assets/Course/image copy 6.png'
import image8 from '../assets/Course/image copy 7.png'
import image9 from '../assets/Course/image copy 8.png'
import image10 from '../assets/Course/image copy 9.png'
import image11 from '../assets/Course/image copy 10.png'
import image12 from '../assets/Course/image copy 11.png'
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";



function Courses() {

  const courses = [
    { id: 1, course: "UI/UX Design | 2.5 Months", cost: '10000', image: image1 },
    { id: 2, course: "Graphic Design | 2.5 Months", cost: '10000', image: image2 },
    { id: 3, course: "Data Science | 3 Months", cost: '10000', image: image3 },
    { id: 4, course: "Web Development | 2.5 Months", cost: '10000', image: image4 },
    { id: 5, course: "Project Management | 2.5 Months", cost: '10000', image: image5 },
    { id: 6, course: "Digital Marketing | 3 Months", cost: '10000', image: image6 },
    { id: 7, course: "Brand Management | 1.5 Months", cost: '10000', image: image7 },
    { id: 8, course: "Public Speaking & Presentation Skills | 1 Month", cost: '10000', image: image8 },
    { id: 9, course: "3D Modeling and Animation | 3 Months", cost: '10000', image: image9 },
    { id: 10, course: "MERN Stack | 3 Months", cost: '10000', image: image10 },
    { id: 11, course: "Business Analytics| 3 Months", cost: '10000', image: image11 },
    { id: 12, course: "Business Analytics| 3 Months", cost: '10000', image: image12 },
  ]


  return (
    <div>
      <div className='bg-gray-100'>
        <div className='flex justify-center pt-[50px]'>
          <h1 className='text-[25px] font-medium'>Our Courses</h1>
        </div>
        <div className='flex flex-wrap justify-center mt-[30px] gap-10 p-5 '>
          {
            courses.map((course) => {
              return (
                <div key={course.id} className='bg-white w-[250px] h-[390px] rounded-[10px]'>
                  <img src={course.image} alt="" className='w-[240px] h-[165px] p-2' />
                  <h1 className='w-[85px] h-[28px] bg-amber-400 rounded-2xl text-blue-800 flex justify-center items-center ml-[20px] mt-[10px]'>Rs.{course.cost}</h1>
                  <h2 className='flex justify-center p-3 font-'>{course.course}</h2>
                  <div className='flex justify-between'>
                    <button className='flex items-center justify-center gap-2 bg-amber-400 w-[135px] h-[30px] rounded-2xl ml-[20px] mt-[10px]'>
                      <IoCartSharp />
                      Add to cart
                    </button>
                    <button className='text-red-600 mr-[20px]'>
                      <FaRegHeart size={20} />
                    </button>
                  </div>
                  <button className='w-[170px] h-[30px] border-2 border-blue-900 text-blue-700 rounded-[5px] mt-[35px] ml-[40px]'>
                    View More
                  </button>
                </div>
              )
            })
          }
        </div>


      </div>
    </div>
  )
}

export default Courses