import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      let response = await fetch("http://localhost:9000/api/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        response = await response.json();
        console.log(response);
        alert(response.msg);
        navigate("/login");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-md shadow-md p-8 w-full max-w-md relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-center text-xl font-semibold mb-6">
            Sign up
          </h2>

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-2 font-semibold">
              Full Name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              Email Address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              Phone
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm pr-10"
              />
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md text-sm pr-10"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-sm py-2 rounded-md font-medium"
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-sm mt-4 text-gray-600">
            Already signed in?{" "}
            <a href="#" className="text-yellow-500 font-medium">
              <NavLink to="/login">Log in</NavLink>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";

// function Register() {

//   const navigate = useNavigate()

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     try {
//       let response = await fetch("http://localhost:9000/api/user/register", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if(response.ok){
//         response = await response.json();
//         console.log(response);
//         alert(response.msg)
//         navigate("/login")
//         }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12">
//       <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6">
//         <h2 className="text-3xl font-bold text-center text-blue-600">Sign Up</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium">Full Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Email</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           >
//             Register
//           </button>
//           <p className="text-center text-sm text-gray-500">
//             Already have an account?{" "}
//             <NavLink to="/login" className="text-blue-600 hover:underline">
//               Login here
//             </NavLink>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
