import React from 'react';

const Book = (props) => {
    console.log(props);
    return (
        <div className='book'>
            <Title title={props.title} />
            <Image imgLink={props.imgLink} />
            <Author author={props.author} />
            <Price price={props.price} />
        </div>
    );
};

const Title = (props) => {
    return <h2>{props.title}</h2>;
};

const Image = (props) => {
    return <img src={props.imgLink} alt="Book cover" />;
};

const Author = (props) => {
    return <h2>{props.author}</h2>;
};

const Price = (props) => {
    return <h3>{props.price}</h3>;
};

export default Book;
