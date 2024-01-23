import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SingleBook = () => {
  const { _id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      const bookFromServer = await fetch(`http://localhost:5000/books/${_id}`);
      const data = await bookFromServer.json();
      setBook(data);
      setLoading(false);
    };
    getBook();
  }, [_id]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-28 px-4 lg:px-24">
          <img src={book.imageURL} alt="" />
          <h2>{book.bookTitle}</h2>
          <p>{book.authorName}</p>
          <p>{book.bookDescription}</p>
        </div>
      )}
    </div>
  );
};

export default SingleBook;
