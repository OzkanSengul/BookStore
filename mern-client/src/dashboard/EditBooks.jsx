import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Checkbox,
  TextInput,
  Select,
  Label,
  Textarea,
} from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    category,
    bookDescription,
    imageURL,
    bookPDFURL,
  } = useLoaderData();

  const bookCategories = [
    "Action and Adventure",
    "Anthology",
    "Classic",
    "Comic and Graphic Novel",
    "Crime and Detective",
    "Drama",
    "Fable",
    "Fairy Tale",
    "Fan-Fiction",
    "Fantasy",
    "Historical Fiction",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const formRef = useRef(null);
  const history = useNavigate();

  const handleBookCategoryChange = (e) => {
    e.preventDefault();
    setSelectedBookCategory(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const book = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.category.value,
      bookDescription: form.bookDescription.value,
      bookPDFURL: form.bookPDFURL.value,
    };

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };

    fetch(`http://localhost:5000/book/${id}`, requestOptions)
      .then((response) => response.json())
      .then(() => {
        alert("Book Updated Successfully");
        console.log(formRef.current);

        history("/admin/dashboard/manage");

        // Reset the form after successful update
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("Error updating book:", error);
      });
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">Edit Book</h2>
      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        ref={formRef}
      >
        {/*first row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>

            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              required
              placeholder="Book Title"
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>

            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              required
              placeholder="Book Author"
              defaultValue={authorName}
            />
          </div>
        </div>
        {/*second row*/}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image" />
            </div>

            <TextInput
              id="imageURL"
              name="imageURL"
              required
              placeholder="Book Image"
              defaultValue={imageURL}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>

            <Select
              id="category"
              name="category"
              required
              value={selectedBookCategory}
              onChange={handleBookCategoryChange}
            >
              {bookCategories.map((category, i) => (
                <option key={i} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/*book description*/}
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>

        <Textarea
          id="bookDescription"
          name="bookDescription"
          required
          placeholder="Add Book Description"
          className="w-full-rounded-md"
          rows={6}
          defaultValue={bookDescription}
        />

        {/*book pdf link*/}
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF Link" />
        </div>

        <TextInput
          id="bookPDFURL"
          name="bookPDFURL"
          required
          placeholder="Book PDF Link"
          defaultValue={bookPDFURL}
        />

        <Button type="submit" className="w-1/2 self-center">
          Update Book
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
