import React, { useContext, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
import image from "../assets/Login/image.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

function Login() {
  const { loginWithRedirect } = useAuth0();

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { getUser } = useContext(AuthContext);

  const { getUser, setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:9000/api/user/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      const response = await res.json();

      if (response.success) {
        if (response.user) {
          setUser(response.user);
        } else {
          await getUser();
        }
        navigate("/");
        alert(response.msg);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
          <form
            onSubmit={handleLogin}
            className="flex flex-col justify-center items-center gap-4 mt-[50px]"
          >
            <div className="space-y-3 flex flex-col">
              <label className="font-semibold text-[18px]">Email</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 w-[450px] h-[45px] rounded-[5px]"
              />

              <label className="font-semibold text-[18px]">Password</label>
              <input
                type="password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
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
            <button
              type="submit"
              className="w-[130px] h-[45px] bg-amber-500 text-blue-800 rounded-[5px] text-[18px] hover:bg-amber-600"
            >
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
          <h1 className="text-[25px] italic text-white font-bold w-[450px]">
            Empower Your Learning Journey – Welcome to S.T. Tech!
          </h1>
          <img src={image} alt="" className="w-[400px] h-[275px]" />
        </div>
      </div>
    </div>
  );
}

export default Login;
