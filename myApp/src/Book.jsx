//rafce
import React from 'react'


const Book = (props) => {
    console.log(props);
    return (
        <div className='book'>
        <h2>{props.title}</h2>
        <img src={props.imgLink} />
        <h2>{props.author}</h2>
        <h3>{props.price}</h3>
            
        </div>
    )
}

export default Book;

function Title() {
    return <h2>Dopamine Detox</h2>;
}

function Image() {
    return <img src="https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg"></img>;
}

function Author() {
    return <h4>Kerry J Donovan</h4>;
}

function Price() {
    return <h5>Rs 99.99</h5>;
}