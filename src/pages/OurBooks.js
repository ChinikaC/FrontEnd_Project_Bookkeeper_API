import React, { useEffect, useState } from "react"
import BookList from "../components/BookList"

const OurBooks = ({ books, postOwnedBook, currentFilter, setCurrentFilter}) => {

    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        filterBooks(currentFilter)
    }, [books,currentFilter])

    const genres = books.map(book => book.genre)

    const uniqueGenres = genres.filter((genre, index) => { return genres.indexOf(genre) === index })

    const listOfGenres = uniqueGenres.map((genre, index) => {
        return (
            <option key={index} value={genre}>
                {genre}
            </option>
        )
    })

    const handleClick = (e) => {
        setCurrentFilter(e.target.value)
        filterBooks(e.target.value)
    }

    const filterBooks = (filter) => {
        if (books != []) {
            if (filter == "all") {
                setFilteredBooks(books);
            } else {
                //filter books and set filtered books to that
                const filtered = books.filter(book => { return book.genre === filter })
                setFilteredBooks(filtered)
            }
        }
    }

    return (
        <>
            <h2>
                Our Books
            </h2>
            <div>
                Filter by genre:

                <select
                    onChange={handleClick}
                    name="BookStatus"
                    value={currentFilter}>
                    <option value="all">All books</option>
                    {listOfGenres}
                </select>
            </div>
            <BookList books={filteredBooks} postOwnedBook={postOwnedBook} ></BookList>
        </>
    )
}

export default OurBooks;