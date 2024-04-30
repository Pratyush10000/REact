import React from 'react';
import Book from './Book';

const BookData = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    imgLink: "https://m.media-amazon.com/images/I/7108sdEUEGL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹352",
  },
  {
    title: "THE RICHEST MAN IN BABYLON",
    author: "George S. Clason ",
    imgLink: "https://m.media-amazon.com/images/I/61TMqBUodWL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹400",
  },
  {
    title: "Wabi Sabi : The Wisdom in Imperfection",
    author: "Nobuo Suzuki",
    imgLink: "https://m.media-amazon.com/images/I/611Y5rMSogL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹250",
  },
  {
    title: "Think Straight: Change your thoughts ",
    author: " Darius Foroux",
    imgLink: "https://m.media-amazon.com/images/I/71XpkRq0ncL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹200",
  },
  {
    title: "Believe in Yourself",
    author: "Dr Joseph Murphy",
    imgLink: "https://m.media-amazon.com/images/I/51JoXgnIciL._AC_UY327_FMwebp_QL65_.jpg",
    price: "₹500",
  },
];

const BookList = () => {
  return (
    <div className="booklist">
      {BookData.map(b => (
        <Book {...b} key={b.title} />
      ))}
    </div>
  );
}

export default BookList;
