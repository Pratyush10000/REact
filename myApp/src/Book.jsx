import React from 'react';

const Book = (props) => {
  const (imgLink,author,title,price)=props;
  return (
    <div className='book'>
      <h2>{title}</h2>
      <img src={imgLink} alt={title}/>
      <h2>{author}</h2>
      <h3>{price}</h3>
    </div>
  );
};

export default Book;
