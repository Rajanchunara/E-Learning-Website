import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import image from '../assets/Login/image.png'

function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <div className=" h-[600px] flex justify-center items-center bg-gray-200">
        <div className="h-[550px] w-[500px] bg-white rounded-l-2xl">
          <div className="flex flex-col justify-center items-center pt-[20px]">
            <h1 className="font-bold text-[25px] italic">Welcome Back!</h1>
            <p className="text-gray-400 italic ">
              Log in to access your account and continue your journey with us.
            </p>
          </div>
          <form className="flex flex-col justify-center items-center gap-4 mt-[50px]">
            <div className="space-y-3 flex flex-col">
              <label className="font-semibold text-[18px]">Username</label>
              <input
                type="text"
                className="bg-gray-200 w-[450px] h-[45px] rounded-[5px]"
              />

              <label className="font-semibold text-[18px]">Password</label>
              <input
                type="password"
                className="bg-gray-200 w-[450px] h-[45px] rounded-[5px]"
              />
              <div className="flex justify-between">
                <label>
                  <input type="checkbox" className="m-0.5" />
                  Remamber Me
                </label>
                <a
                  href="#"
                  className=" text-blue-900 hover:underline mr-[30px]"
                >
                  Forget password?
                </a>
              </div>
            </div>
            <button type="submit" className="w-[130px] h-[45px] bg-amber-500 text-blue-800 rounded-[5px] text-[18px] hover:bg-amber-600">
              Login
            </button>
            <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="hover:bg-gray-300 p-2 rounded-[5px] bg-gray-200   w-[350px] flex justify-center gap-4"
          >
            <FcGoogle size={20} className="m-0.5" />
            Login With Google
          </button>

          </form>
        </div>
        <div className="h-[550px] w-[500px] bg-blue-900 rounded-r-2xl flex flex-col justify-center items-center gap-20">
          <h1  className="text-[25px] italic text-white font-bold w-[450px]">Empower Your Learning Journey – Welcome to S.T. Tech!</h1>
             <img src={image} alt="" className="w-[400px] h-[275px]" />
        </div>
      </div>

      {/* <form
        className="shadow-2xl  space-y-3  shadow-black w-[500px] 
         m-auto  mt-20 rounded-2xl p-5 pl-8 flex flex-col"
      >
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          className="  p-2 rounded-2xl  outline-none  border-2 border-black   w-[400px]"
          placeholder="Enter Your Email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="  p-2 rounded-2xl outline-none border-black border-2   w-[400px]"
          id=""
          placeholder="Enter Your Password"
        />
        <div className="space-y-4 pl-[20px]">
          <button className="bg-blue-400 hover:bg-blue-600  text-white p-2 rounded-2xl   w-[350px] mt-[20px]">
            Login
          </button>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
            className="border p-2 rounded-2xl   w-[350px] flex justify-center gap-4"
          >
            <FcGoogle size={20} className="m-0.5" />
            Login With Google
          </button>
        </div>
      </form> */}

      {/* 
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-6xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-2xl font-bold mb-1">Welcome Back!</h2>
          <p className="text-sm text-gray-600 mb-6">
            Log in to access your account and continue your journey with us.
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-semibold mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center justify-between mt-2 text-sm">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox mr-1" />
                  Remember Me
                </label>
                <a href="#" className="text-blue-600 hover:underline">Forgot password?</a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition duration-200"
            >
              Log in
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="mx-3 text-gray-400">or</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center border border-gray-300 py-2 rounded hover:bg-gray-100 transition duration-200"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Continue with Google
            </button>

            <p className="text-sm text-center mt-6">
              New user? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </form>
        </div>

       
        <div className="hidden md:flex w-1/2 bg-gradient-to-tr from-blue-900 to-blue-600 text-white flex-col items-center justify-center p-10 relative">
          <div className="absolute top-5 right-5">
            <img src="https://i.imgur.com/UwA1ZQK.png" alt="Logo" className="w-24" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-6">
            Empower Your Learning Journey –<br /> Welcome to S.T. Tech!
          </h2>
          <img
            src="https://i.imgur.com/5s9nC3G.png" 
            alt="Learning"
            className="w-4/5"
          />
        </div>
      </div>
    </div> */}
    </div>
  );
}

export default Login;
