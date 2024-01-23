import React from "react";
import BookCards from "../components/BookCards";
import { useState, useEffect } from "react";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetch("http://localhost:5000/all-books");
      const data = await booksFromServer
        .json()
        .then((data) => data.slice(4, 8))
        .then((data) => data.reverse());
      setBooks(data);
    };
    getBooks();
  }, []);

  return <BookCards books={books} headline="Other Books" />;
};

export default OtherBooks;
