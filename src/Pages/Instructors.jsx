import React from 'react'
import Footer from "../Footer/Footer";
import { NavLink } from 'react-router-dom';
import image1 from '../assets/Instructor/image.png';
import image2 from '../assets/Instructor/image copy.png';
import image3 from '../assets/Instructor/image copy 2.png';
import image4 from '../assets/Instructor/image copy 3.png';
import image5 from '../assets/Instructor/image copy 4.png';


function Instructors() {


  const instructorsData = [
    { id: 1, name: 'NANCY WHITE', course: 'UI/UX Design, Graphic Design, Digital Marketing', image: image1 },
    { id: 2, name: 'HENRY SMITH', course: 'Data Science, MERN Stack', image: image2 },
    { id: 3, name: 'CHARLOTTE', course: 'COURSE: Web Development, Brand Management', image: image3 },
    { id: 4, name: 'JORDAN', course: 'Project Management, Public Speaking & Presentation Skills', image: image4 },
    { id: 5, name: 'ETHAN', course: 'Business Analytics, 3D Modeling and Animation', image: image5 },
  ]


  return (
    <div>
      <div className='h-[1100px] bg-gray-200'>
        <h1 className='text-[27px] font-bold pt-[50px] ml-[70px]'>Instructors</h1>
        <div>
          {
            instructorsData.map((teacher) => {
              return (
                <div key={teacher.id} className='bg-white flex items-center justify-between h-[150px] w-[1000px] m-8 ml-[70px] pl-[30px] pr-[30px] rounded-[5px] shadow-2xl shadow-gray-500 '>
                  <div className='flex gap-8'>
                    <img src={teacher.image} alt="" className='w-[90px] h-[90px]' />
                    <div className='space-y-2 font-medium'>
                      <h1>{teacher.name}</h1>
                      <h2>COURSE: <span className='font-normal'>{teacher.course}</span></h2>
                    </div>
                  </div>
                  <NavLink key={teacher.name} to={`/instructorprofile/${teacher.id}`} className='w-[120px] h-[40px] bg-blue-950 flex justify-center items-center text-white rounded-[8px]'>
                    Visit Profile
                  </NavLink>

                </div>
              )
            })
          }

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Instructors