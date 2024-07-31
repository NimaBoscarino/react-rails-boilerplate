import { useState, useEffect } from "react";
import { getBookById, getBooksByName, getAuthorName } from "../apiRequests/bookApi/bookApiRequests";

const useBookById = (id) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const bookData = await getBookById(id);
        setBook(bookData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  return { book, loading, error };
};

const useBooksByName = (name) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const bookList = await getBooksByName(name);
        setBooks(bookList);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, [name]);

  return { books, loading, error };
};

export { useBookById, useBooksByName };
