import { useEffect, useState } from "react";
import {
  createBookStatus,
  getBookStatusById,
  getAllBookStatuses,
  updateBookStatusById,
  deleteBookStatusById,
} from "../../apiRequests/backendApi/bookStatusRequests";

// Create Book Status
const useCreateBookStatus = () => {
  const [bookStatus, setBookStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateBookStatus = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const createdBookStatus = await createBookStatus(data);
      setBookStatus(createdBookStatus);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { bookStatus, loading, error, handleCreateBookStatus };
};

// Read Book Status by Id
const useBookStatusById = (id) => {
  const [bookStatus, setBookStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookStatus = async () => {
      try {
        const bookStatusData = await getBookStatusById(id);
        setBookStatus(bookStatusData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookStatus();
  }, [id]);

  return { bookStatus, loading, error };
};

// Read All Book Statuses
const useAllBookStatuses = () => {
  const [bookStatuses, setBookStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookStatuses = async () => {
      try {
        const bookStatusData = await getAllBookStatuses();
        setBookStatuses(bookStatusData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBookStatuses();
  }, []);

  return { bookStatuses, loading, error };
};

// Update Book Status by Id
const useUpdateBookStatusById = () => {
  const [bookStatus, setBookStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateBookStatus = async (id, updatedData) => {
    setLoading(true);
    try {
      const bookStatusData = await updateBookStatusById(id, updatedData);
      setBookStatus(bookStatusData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { bookStatus, loading, error, updateBookStatus };
};

// Delete Book Status by Id
const useDeleteBookStatusById = () => {
  const [deleted, setDeleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteBookStatus = async (id) => {
    setLoading(true);
    try {
      await deleteBookStatusById(id);
      setDeleted(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { deleted, loading, error, deleteBookStatus };
};

export {
  useCreateBookStatus,
  useBookStatusById,
  useAllBookStatuses,
  useUpdateBookStatusById,
  useDeleteBookStatusById,
};
