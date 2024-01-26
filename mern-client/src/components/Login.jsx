import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const Login = () => {
    const { loginWithGoogle,signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
  
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const user = {
          email: form.email.value,
          password: form.password.value,
        };
        console.log(user);
      
        await signIn(user.email, user.password); // await here if signIn is asynchronous
      
        alert("User Login Successfully");
        navigate(from, { replace: true });
      };
      
    const handleRegister = (e) => {
      e.preventDefault();
      loginWithGoogle();
      navigate(from, { replace: true });
    };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                 Login to your account
                </h1>
              </div>
              <form
                onSubmit={handleLogin}
                className="divide-y divide-gray-200"
              >
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                    />
                  </div>
                  <div className="relative">
                    <p>
                      If you havent an account. Please Register{" "}
                      <Link to="/sign-up" className="text-blue-600 underline ">
                        Sign Up
                      </Link>{" "}
                      Here
                    </p>
                    <br />
                    <div className="relative">
                      <button
                        className="bg-blue-500 text-white rounded-md px-4 py-2"
                        type="submit"

                      >
                        Login
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <hr/>
              <div className="flex w-full items-center justify-center space-x-2">
                <button
                  className="block w-full max-w-xs mx-auto bg-white rounded-md text-black px-4 py-2 font-medium hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
                  onClick={handleRegister}
                >
                  <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="google" className="inline-block w-6 mr-2" />{" "}
                  Register with Google
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login