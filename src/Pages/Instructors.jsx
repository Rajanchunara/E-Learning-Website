import React, { useContext, useState } from 'react'
import { ValueContext } from '../Context/ValueProvider'
import Footer from "../Footer/Footer";
import { NavLink } from 'react-router-dom';

function Instructors() {

  const data = useContext(ValueContext)

  return (
    <div>
      <div className='h-[1100px] bg-gray-200'>
        <h1 className='text-[27px] font-bold pt-[50px] ml-[70px]'>Instructors</h1>
        <div>
          {
            data.map((teacher, index) => {
              return (
                <div key={index} className='bg-white flex items-center justify-between h-[150px] w-[1000px] m-8 ml-[70px] pl-[30px] pr-[30px] rounded-[5px] shadow-2xl shadow-gray-500 '>
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