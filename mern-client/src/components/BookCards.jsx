/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const BookCards = ({ headline, books }) => {
  return (
    <div className="px-4 my-16 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      <div className="mt-12">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper w-full h-full"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/books/${book._id}`}>
                <div className="relative">
                  <img src={book.imageURL} alt="" />
                  <div className="absolute top-3 right-4 bg-blue-600 hover:bg-black text-white font-bold p-2 rounded">
                    <FaShoppingCart className="w-4 h-4 text-white  " />
                  </div>
                </div>
                <div>
                  <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                  </div>
                  <div>
                    <p>10.00 TL</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
