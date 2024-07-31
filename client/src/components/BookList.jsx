// mapped list of books
import { useEffect, useState } from "react";
import {
    useCreateBookStatus,
    useBookStatusById,
    useAllBookStatuses,
    useUpdateBookStatusById,
    useDeleteBookStatusById,
  } from "../helpers/hooks/apiData/useBookStatusdata";
import Book from "./Book"

const BookList = (props) => {
    // const { books, favBooks, addWantToRead, addReading, addRead, addFav, removeFav, addPost, avgTimeSpent, avgRating } = props;
    const { books } = props;
    const [favBooks, setFavBooks] = useState([]);
    const [wantToRead, setWantToRead] = useState([]);
    const [reading, setReading] = useState([]);
    const [read, setRead] = useState([]);

    const bookStatus = useBookStatusById();
    const updateStatus = useUpdateBookStatusById();
    const createStatus = useCreateBookStatus();

    const updateBookStatus = (bookId, status) => {
        if (bookStatus(bookId)) {
            updateStatus(bookId, status);
        } else {
            createStatus(bookId, status);
        }
    };

    const addFav = (book) => {
        updateBookStatus(book.id, { favBook: true });
    };

    const removeFav = (book) => {
        updateStatus(book.id, { favBook: false });
    };

    const addWantToRead = (book) => {
        updateBookStatus(book.id, { status: 'to_read' });
    };

    const addReading = (book) => {
        updateBookStatus(book.id, { status: 'reading' });
    };

    const addRead = (book) => {
        updateBookStatus(book.id, { status: 'read' });
    };

    const removeStatus = (book) => {
        updateBookStatus(book.id, { status: null })
    };

    return (
        <ul>
            {books && books.map((book) => (
                <Book 
                key={book.id}
                book={book}
                favBooks={favBooks}
                addWantToRead={addWantToRead}
                addReading={addReading}
                addRead={addRead}
                removeStatus={removeStatus}
                addFav={addFav}
                removeFav={removeFav}
                // addPost={addPost}
                // avgTimeSpent={avgTimeSpent}
                // avgRating={avgRating}
                 />
            ))}
        </ul>
    );
};

export default BookList;