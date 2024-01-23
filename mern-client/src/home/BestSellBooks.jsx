import React, { useEffect } from "react";
import { useState } from "react";
import BookCards from "../components/BookCards";

const BestSellBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await fetch("http://localhost:5000/all-books");
      const data = await booksFromServer.json();
      console.log(data);
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div>
      <BookCards books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellBooks;
