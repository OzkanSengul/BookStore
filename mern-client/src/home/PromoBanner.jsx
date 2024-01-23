import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/awardbooks.png";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 lg:px-24">
      <div className="px-4 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2023 National Book Awards for Fiction Literature
          </h2>
          <Link to="/shop" className="block">
            <button className="bg-blue-700 hover:bg-black text-white font-semibold py-2 px-5 rounded transition-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src={bookPic} alt="" className="rounded w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
