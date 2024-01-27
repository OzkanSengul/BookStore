import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { user, logOut } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handeLogout = () => {
    logOut()
      .then(() => {
        alert("Logged out successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-teal-100">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          handeLogout();
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
