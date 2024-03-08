import React, {useState } from "react";
import { books } from "./SearchFilterData";
import BookCard from "./BookCard";

const SearchBooks = () => {
    const [searchBook, setSearchBook] = useState("");
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchBook(value);
        filterData(value);
    }

    const filterData = (searchBook) =>  {
        const filteredData = books.filter((book) => book.category.toLowerCase().includes(searchBook.toLowerCase()));
        setFilteredBooks(filteredData);
    }

    return (
        <div>
            <input className="input" 
                type="text"
                value={searchBook}
                placeholder="Enter Category"
                onChange={handleInputChange}
            />
            <div className="card-list">
                {filteredBooks.map(book => (
                    <BookCard book={book} key={book.title} />
                ))}
            </div>
        </div>
    );
}

export default SearchBooks;