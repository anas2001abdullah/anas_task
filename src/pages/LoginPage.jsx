import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/TrendLogo.png";

const Login = ({ onLogin }) => {
  const [errors, setErrors] = useState({
    password: "",
    email: "",
  });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!email.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "",
      }));
    }

    const user = {
      email: email,
      password: pass,
    };
    if (isValid) {
      const result = await fetch("https://learnverse.onrender.com/user/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });
      const data = await result.json();
      if (data.success) {
        onLogin(data.data.user, data.data.token);
        navigate("/");
      } else {
        if (data.field === "email") {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: data.message,
          }));
        } else {
          setErrors((prevErrors) => ({
            ...prevErrors,
            password: data.message,
          }));
        }
      }
    }
  };

  return (
    <section className="w-screen h-screen bg-purple-200 flex justify-center items-center relative">
      <div className="w-full h-screen lg:w-2/3 lg:h-auto z-20 rounded-lg">
        <form className="grid grid-cols-8 h-full" onSubmit={handleLogin}>
          <div className="col-span-8 md:col-span-4 bg-purple-400 px-20 py-10 rounded-l-lg">
            <p className="leading-loose text-purple-950 text-2xl mt-8 mb-20 text-center">
              Welcome to <br />
              <span className="text-4xl funky-font">Trend</span>
            </p>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-5 mb-3">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="border-purple-900 text-purple-900 bg-transparent z-0 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-[1px] appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label
                    htmlFor="email"
                    className="bg-purple-400 absolute text-sm text-purple-900 transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-3 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[80%] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
                  >
                    Your Email
                  </label>
                </div>
                <p className="text-sm text-red-400 mt-1">
                  <span className="font-medium">{errors.email}</span>
                </p>
              </div>

              <div className="col-span-5 mb-3">
                <div className="relative ">
                  <input
                    type="password"
                    id="password"
                    className="border-purple-900 text-purple-900 bg-transparent z-0 block px-2.5 pb-2.5 pt-4 w-full text-sm rounded-lg border-[1px]  appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                    placeholder=" "
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                  />
                  <label
                    htmlFor="password"
                    className="bg-purple-400 absolute text-sm text-purple-900 transition-all duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-3 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-[80%] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 "
                  >
                    Enter your password
                  </label>
                </div>
                <p className="text-sm text-red-400 mt-1">
                  {pass.length < 8 && pass.length > 0 && (
                    <span className="font-medium">
                      Password must be at least 8 characters long.
                    </span>
                  )}
                  <span className="font-medium">{errors.password}</span>
                </p>
              </div>

              <div className="col-start-2 col-span-3 px-0 mt-2">
                <button
                  type="submit"
                  className="bg-purple-600 text-purple-200 py-2 px-4 rounded-lg hover:bg-purple-900 hover:text-purple-200 w-full"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col relative col-span-4 bg-purple-900 p-4 justify-center items-center rounded-r-lg gap-14">
            <div className="col-span-2 rounded-full bg-purple-300 w-60 h-60 flex justify-center items-center p-5">
              <img className="w-full" src={logo} alt="Trend Logo" />
            </div>
            <div>
              <p className="text-purple-200">
                Don't have an account?{" "}
                <Link
                  to={"/signup"}
                  className="text-purple-600 italic hover:text-purple-400"
                >
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
