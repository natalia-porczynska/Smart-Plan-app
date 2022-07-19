import axios from "axios";

const connectionUrl = "http://localhost:8000/";

const urlPosts = `${connectionUrl}posts`;
const urlUsers = `${connectionUrl}users`;
const urlComments = `${connectionUrl}comments`;

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
