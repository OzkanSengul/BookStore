import React, { useEffect, useState } from "react";
import { Card } from 'flowbite-react';


const Shop = () => {
  const [books, setBooks] = useState([]);
 useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }
  , []);


  return (
  <div className="mt-28 px-4 lg:px24">
    <h2 className="text-5xl font-bold text-center" >All Books are here </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12">
      {books.map((book) => (
        <Card key={book._id} className="shadow-md">
          <img src={book.imageURL} alt={book.bookTitle} className="h-96" />
          <div className="p-4">
            <h3 className="font-bold text-xl mb-2">{book.bookTitle}</h3>
            <p className="text-gray-700 text-base">{book.authorName}</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Buy Now
          </button>
        </Card>
      ))
      }

    </div>

  </div>);
};

export default Shop;
