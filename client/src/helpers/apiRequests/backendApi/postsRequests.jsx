import axios from "axios";

// POSTS CRUD

// CREATE
const createPost = async (params) => {
  try {
    const res = await axios.post(`/api/posts`, params);
    console.log("post created:", res.data);
    return res.data;
  } catch (err) {
    console.log("error creating post: ", err.message);
    return null;
  }
};

// READ ONE
const getPostById = async (postId) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting post: ", err.message);
    return null;
  }
};

// READ ALL
const getAllPosts = async () => {
  try {
    const res = await axios.get("/api/posts");
    console.log("response received: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error getting posts: ", err.message);
    return null;
  }
};

// UPDATE
const updatePostById = async (postId, params) => {
  try {
    const res = await axios.put(`/api/posts/${postId}`, params);
    console.log("post updated: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error updating post: ", err.message);
    return null;
  }
};

// DELETE
const deletePostById = async (postId) => {
  try {
    const res = await axios.delete(`/api/posts/${postId}`);
    console.log("post deleted: ", res.data);
    return res.data;
  } catch (err) {
    console.log("error deleting post: ", err.message);
    return null;
  }
};

export default {
  createPost,
  getPostById,
  getAllPosts,
  updatePostById,
  deletePostById,
};
