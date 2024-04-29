import React from 'react'
import Book from './Book'

const data1={
  title: "The Catcher in the Rye",
  author:"J.D. Salinger",
  imgLink:"https://m.media-amazon.com/images/I/7108sdEUEGL._AC_UY327_FMwebp_QL65_.jpg",
  price:"₹352"
}

const Booklist = () => {
  return (
    <div className="booklist">
      <Book 
      title={data1.title} author={data1.author}  imgLink={data1.imgLink} price={data1.price} />
    </div>
  );
};

export default Booklist;