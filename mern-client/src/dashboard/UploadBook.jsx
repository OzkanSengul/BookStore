import React from 'react'
import { useState } from 'react'
import {Button,Checkbox,TextInput,Select,Label, Textarea} from 'flowbite-react';


const UploadBook = () => {
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
    "Historical Fiction"];
  
  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleBookCategoryChange = (e) => {
    e.preventDefault();
    setSelectedBookCategory(e.target.value);
  }

  const handleBookSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const book = {
      bookTitle: form.bookTitle.value,
      authorName: form.authorName.value,
      imageURL: form.imageURL.value,
      category: form.category.value,
      bookDescription: form.bookDescription.value,
      bookPDFURL: form.bookPDFURL.value
    };
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    };
    fetch('http://localhost:5000/upload-book', requestOptions)
      .then(response => response.json())
      .then(alert('Book Uploaded Successfully'))
  
  form.reset();
     
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-gray-800'>Upload Book</h2>
      <form onSubmit={ handleBookSubmit } className='flex lg:w-[1180px] flex-col flex-wrap gap-4'>
        {/*first row*/}
       <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className='mb-2 block'>
              <Label htmlFor='bookTitle' value='Book Title'/>
              </div>

              <TextInput
                id='bookTitle'
                name='bookTitle'
                type='text'
                required
                placeholder='Book Title'
              />
        </div>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
              <Label htmlFor='authorName' value='Author Name'/>
              </div>

              <TextInput
                id='authorName'
                name='authorName'
                type='text'
                required
                placeholder='Book Author'
              />
        </div>
        </div>
        {/*second row*/}
        <div className='flex gap-8'>
       <div className='lg:w-1/2'>
          <div className='mb-2 block'>
              <Label htmlFor='imageURL' value='Book Image' />
              </div>

              <TextInput
                id='imageURL'
                name='imageURL'
                required
                placeholder='Book Image'
              />
        </div>
        <div className='lg:w-1/2'>
          <div className='mb-2 block'>
              <Label htmlFor='category' value='Book Category'/>
              </div>

              <Select
                id='category'
                name='category'
                required
                value={selectedBookCategory}
                onChange={handleBookCategoryChange}
              >
                {bookCategories.map((category,i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </Select>        
        </div>
        </div>

        {/*book description*/}
        <div className='mb-2 block'>
              <Label htmlFor='bookDescription' value='Book Description'/>
              </div>

             <Textarea
                id='bookDescription'
                name='bookDescription'
                required
                placeholder='Add Book Description'
                className='w-full-rounded-md'
                rows={6}
              />

        {/*book pdf link*/}
        <div className='mb-2 block'>
              <Label htmlFor='bookPDFURL' value='Book PDF Link'/>
              </div>

              <TextInput
                id='bookPDFURL'
                name='bookPDFURL'
                required
                placeholder='Book PDF Link'
              />

        <Button type='submit' className='w-1/2 self-center'>
          Upload Book
        </Button>

      </form>  
    </div>
  )
}

export default UploadBook