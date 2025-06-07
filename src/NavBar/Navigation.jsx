import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
// import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../Context/CartContext/CartProvider";
import { AuthContext } from "../Context/AuthProvider";

function Navigation() {
  // const { user, logout, isAuthenticated } = useAuth0();

  const { state } = useContext(CartContext);

  const { getUser, user, setUser } = useContext(AuthContext);
  const logout = async () => {
    let response = await fetch("http://localhost:9000/api/user/logout", {
      method: "POST",
      credentials: "include",
    });
    if (response.ok) {
      response = await response.json();
      console.log(response);
      setUser(null);
      alert(response.msg);
    }
  };

  const totalCartItem = state.cartItem.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div>
      <div className="flex items-center justify-between gap-15 p-2.5 h-20 bg-amber-300 ">
        <div className="space-x-5 ml-[60px] flex">
          <NavLink to="/" className="hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="hover:text-blue-500">
            Dashboard
          </NavLink>
          <NavLink to="/courses" className="hover:text-blue-500">
            Courses
          </NavLink>
          <NavLink to="/instructors" className="hover:text-blue-500">
            Instructors
          </NavLink>
          <NavLink to="/aboutus" className="hover:text-blue-500">
            About Us
          </NavLink>
          <NavLink to="/cartpage" className="hover:text-blue-500">
            <span className="absolute ml-[25px] top-[18px] z-50 text-white border w-[25px] flex justify-center bg-red-500 rounded-[50px]">
              {totalCartItem}
            </span>

            <BsCart4 className="w-[30px] h-[30px]  " />
          </NavLink>
        </div>
        <div className=" flex  space-x-5">
          <NavLink className=" bg-amber-50 h-[35px] text-[15px] rounded-[50px] flex justify-center items-center p-1.5">
            <input type="text" placeholder="Search for anything" />
            <CiSearch />
          </NavLink>
          <NavLink className="hover:text-blue-700">
            <FaRegHeart size={30} />
          </NavLink>

          {user ? (
            <button
              className=" bg-blue-600 text-white w-[85px] flex justify-center items-center h-[35px] rounded-[10px] hover:bg-blue-900"
              onClick={() => {
                logout();
              }}
            >
              LogOut
            </button>
          ) : (
            <div className="flex gap-3">
              <NavLink
                to="/login"
                className="text-blue-500 border-[1px] border-amber-50 h-[35px] hover:bg-blue-500 hover:text-white w-[80px] flex items-center justify-center rounded-[10px]"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className=" bg-blue-600 text-white w-[85px] flex justify-center items-center h-[35px] rounded-[10px] hover:bg-blue-900"
              >
                Register
              </NavLink>
            </div>
          )}
          {user && (
            <div className="flex justify-center items-center text-blue-700 font-semibold">
              <h1>{user.name}</h1>
            </div>
          )}

          {/* {isAuthenticated ? (
            <NavLink
              to="/profile"
              className="flex items-center gap-2 text-blue-900 font-medium"
            >
              <img src={user.picture} alt="" className="rounded-full h-10" />
              <h1>{user.name}</h1>
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-blue-500 border-[1px] border-amber-50 h-[35px] hover:bg-blue-500 hover:text-white w-[80px] flex items-center justify-center rounded-[10px]"
            >
              Login
            </NavLink>
          )}

          <NavLink
            to="/register"
            className=" bg-blue-600 text-white w-[85px] flex justify-center items-center h-[35px] rounded-[10px] hover:bg-blue-900"
          >
            Register
          </NavLink> */}

          {/* <NavLink className="hover:text-blue-700">
            <BsGlobe size={30} />
          </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navigation;

// import React, { useContext, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { IoCartSharp } from "react-icons/io5";
// import { FaRegHeart, FaUser } from "react-icons/fa";
// import { BsGlobe, BsCart4 } from "react-icons/bs";
// import { CiSearch } from "react-icons/ci";
// import { useAuth0 } from "@auth0/auth0-react";
// import { CartContext } from "../Context/CartContext/CartProvider";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { IoClose } from "react-icons/io5";

// function Navigation() {
//   const { user, logout, isAuthenticated } = useAuth0();
//   const { state } = useContext(CartContext);
//   const [isOpen, setIsOpen] = useState(false);

//   const totalCartItem = state.cartItem.reduce((acc, item) => acc + item.qty, 0);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="bg-amber-300">
//       <div className="flex justify-between items-center px-4 py-3 md:py-4">
//         {/* Left: Logo or Home */}
//         <div className="text-xl font-bold">
//           <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={28} />}
//           </button>
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-5 items-center">
//           <NavLink to="/dashboard" className="hover:text-blue-500">Dashboard</NavLink>
//           <NavLink to="/courses" className="hover:text-blue-500">Courses</NavLink>
//           <NavLink to="/instructors" className="hover:text-blue-500">Instructors</NavLink>
//           <NavLink to="/aboutus" className="hover:text-blue-500">About Us</NavLink>
//           <NavLink to="/more" className="hover:text-blue-500">More</NavLink>

//           <NavLink to="/cartpage" className="relative hover:text-blue-500">
//             <span className="absolute -top-2 -right-2 text-white text-sm bg-red-500 w-5 h-5 flex items-center justify-center rounded-full">
//               {totalCartItem}
//             </span>
//             <BsCart4 className="w-7 h-7" />
//           </NavLink>
//         </div>

//         {/* Right Actions */}
//         <div className="hidden md:flex items-center space-x-4">
//           <div className="flex items-center bg-amber-50 rounded-full px-2 py-1">
//             <input
//               type="text"
//               placeholder="Search"
//               className="bg-transparent focus:outline-none text-sm px-2"
//             />
//             <CiSearch />
//           </div>
//           <IoCartSharp size={25} className="hover:text-blue-700" />
//           <FaRegHeart size={25} className="hover:text-blue-700" />
//           {isAuthenticated ? (
//             <NavLink to="/profile" className="flex items-center gap-2 text-blue-900 font-medium">
//               <img src={user.picture} alt="user" className="rounded-full h-8" />
//               <span className="text-sm">{user.name}</span>
//             </NavLink>
//           ) : (
//             <NavLink
//               to="/login"
//               className="text-blue-500 border border-amber-50 h-9 w-20 flex items-center justify-center rounded-lg hover:bg-blue-500 hover:text-white"
//             >
//               Login
//             </NavLink>
//           )}
//           <NavLink
//             to="/register"
//             className="bg-blue-600 text-white w-20 h-9 flex justify-center items-center rounded-lg hover:bg-blue-900"
//           >
//             Register
//           </NavLink>
//           <BsGlobe size={25} className="hover:text-blue-700" />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-3">
//           <NavLink to="/dashboard" className="block hover:text-blue-500">Dashboard</NavLink>
//           <NavLink to="/courses" className="block hover:text-blue-500">Courses</NavLink>
//           <NavLink to="/instructors" className="block hover:text-blue-500">Instructors</NavLink>
//           <NavLink to="/aboutus" className="block hover:text-blue-500">About Us</NavLink>
//           <NavLink to="/more" className="block hover:text-blue-500">More</NavLink>
//           <NavLink to="/cartpage" className="flex items-center gap-2 hover:text-blue-500">
//             <BsCart4 />
//             <span>Cart ({totalCartItem})</span>
//           </NavLink>
//           <div className="flex gap-3 items-center">
//             <CiSearch />
//             <input
//               type="text"
//               placeholder="Search"
//               className="border px-2 py-1 rounded w-full"
//             />
//           </div>
//           {!isAuthenticated ? (
//             <>
//               <NavLink to="/login" className="block text-blue-500 hover:text-blue-700">Login</NavLink>
//               <NavLink to="/register" className="block text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-900">
//                 Register
//               </NavLink>
//             </>
//           ) : (
//             <NavLink to="/profile" className="flex items-center gap-2">
//               <img src={user.picture} alt="user" className="rounded-full h-8" />
//               <span>{user.name}</span>
//             </NavLink>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Navigation;
