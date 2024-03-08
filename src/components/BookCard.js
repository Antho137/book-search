import React from "react";

export default function BookCard({book}) {
    return (
         <div className="card"  >
           <div className="card--content">
            <img className="card--image" src={book.image} alt="" />
                <h3 className="card--title">{book.name}</h3>
                <p>Author: {book.author}</p>
                <p>Release year: {book.year}</p>
                <p>Pages: {book.pages}</p>
            </div>
        </div>
    );
}