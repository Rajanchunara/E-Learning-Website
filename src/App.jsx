import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Dashborad from './Pages/Dashborad'
import Courses from './Pages/Courses'
import Instructors from './Pages/Instructors'
// import More from './Pages/More'
import Navigation from './NavBar/Navigation'
import Login from './Aurth/Login'
import Register from './Pages/Register'
import Profile from './Pages/Profile'
import InstructorProfile from './Pages/InstructorProfile'
import Watchlist from './Pages/Watchlist'
import CourseDetails from './Pages/courseDetails'
import FeedBack from './Pages/FeedBack'
import Settings from './Pages/Settings'
import CartPage from './Pages/CartPage'
import Payment from './Pages/Payment/Payment'
import Failure from './Pages/Payment/Failure'
import Success from './Pages/Payment/Success'
import MyCourses from './Pages/MyCourses'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/dashboard' element={<Dashborad/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/instructors' element={<Instructors/>} />
        {/* <Route path='/more' element={<More/>} /> */}
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/instructor/:id' element={<InstructorProfile/>} />
        <Route path='/watchlist' element={<Watchlist/>} />
        <Route path='/feedback' element={<FeedBack/>} />
        <Route path='/settings' element={<Settings/>} />
        <Route path='/cartpage' element={<CartPage/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/failure' element={<Failure/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/mycourses' element={<MyCourses/>} />
      </Routes>
    </div>
  )
}

export default App