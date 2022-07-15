import axios from "axios";

const urlPosts = "http://localhost:8000/posts";
const urlUsers = "http://localhost:8000/users";
const urlComments = "http://localhost:8000/comments";

export const fetchPosts = () => axios.get(urlPosts);
export const createPost = (newPost: any) => axios.post(urlPosts, newPost);
export const updatePost = (id: any, updatedPost: any) =>
  axios.patch(`${urlPosts}/${id}`, updatedPost);
export const deletePost = (id: any) => axios.delete(`${urlPosts}/${id}`);

export const fetchUsers = () => axios.get(urlUsers);
export const createUser = (newUser: any) => axios.post(urlUsers, newUser);
export const updateUser = (id: any, updatedPost: any) =>
  axios.patch(`${urlUsers}/${id}`, updatedPost);
export const deleteUser = (id: any) => axios.delete(`${urlUsers}/${id}`);

export const fetchComments = () => axios.get(urlComments);
export const createComment = (newComment: any) =>
  axios.post(urlComments, newComment);
export const updateComment = (id: any, updatedComment: any) =>
  axios.patch(`${urlComments}/${id}`, updatedComment);
export const deleteComment = (id: any) => axios.delete(`${urlComments}/${id}`);
