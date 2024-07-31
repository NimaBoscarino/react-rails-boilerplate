import axios from "axios";

// USERS CRUD

// CREATE
const createUser = async (params) => {
  try {
    const res = await axios.post(`/api/users`, params);
    console.log("user created:", res.data);
    return res.data;
  } catch (err) {
    console.log("error creating users: ", err.message);
    return null;
  }
};

// READ ONE
const getUserById = async (userId) => {
  try {
    const res = await axios.get(`/api/users/${userId}`);
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting user: ", err.message);
    return null;
  }
};

// READ ALL
const getAllUsers = async () => {
  try {
    const res = await axios.get("/api/users");
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting users: ", err.message);
    return null;
  }
};

// UPDATE
const updateUserById = async (userId, params) => {
  try {
    const res = await axios.put(`/api/users/${userId}`, params);
    console.log("user updated: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error updating user: ", err.message);
    return null;
  }
};

// DELETE
const deleteUserById = async (userId) => {
  try {
    const res = await axios.delete(`/api/users/${userId}`);
    console.log("user deleted: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error deleting user: ", err.message);
    return null;
  }
};

export default {
  createUser,
  getUserById,
  getAllUsers,
  updateUserById,
  deleteUserById,
};
