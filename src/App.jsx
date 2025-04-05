import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Dashborad from './Pages/Dashborad'
import Courses from './Pages/Courses'
import Instructors from './Pages/Instructors'
import More from './Pages/More'
import Navigation from './NavBar/Navigation'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/dashboard' element={<Dashborad/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/instructors' element={<Instructors/>} />
        <Route path='/more' element={<More/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App