import axios from "axios";

// POSTS CRUD

// CREATE
const createBookStatus = async (params) => {
  try {
    const res = await axios.post(`/api/bookStatuses`, params);
    console.log("book status created:", res.data);
    return res.data;
  } catch (err) {
    console.log("error creating book status: ", err.message);
    return null;
  }
};

// READ ONE
const getBookStatusById = async (bookStatusId) => {
  try {
    const res = await axios.get(`/api/BookStatuses/${bookStatusId}`);
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting bookStatus: ", err.message);
    return null;
  }
};

// READ ALL
const getAllBookStatuses = async () => {
  try {
    const res = await axios.get("/api/bookStatuses");
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting bookStatuses: ", err.message);
    return null;
  }
};

// UPDATE
const updateBookStatusById = async (bookStatusId, params) => {
  try {
    const res = await axios.put(`/api/bookStatuses/${bookStatusId}`, params);
    console.log("bookStatus updated: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error updating bookStatus: ", err.message);
    return null;
  }
};

// DELETE
const deleteBookStatusById = async (bookStatusId) => {
  try {
    const res = await axios.delete(`/api/bookStatuses/${bookStatusId}`);
    console.log("bookStatus deleted: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error deleting bookStatus: ", err.message);
    return null;
  }
};

export default {
  createBookStatus,
  getBookStatusById,
  getAllBookStatuses,
  updateBookStatusById,
  deleteBookStatusById,
};
