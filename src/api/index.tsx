import axios from "axios";
import { Post, User, Comment, Id } from "./types";

const connectionUrl = "http://localhost:8000/";

const urlPosts = `${connectionUrl}posts`;
const urlUsers = `${connectionUrl}users`;
const urlComments = `${connectionUrl}comments`;

export const fetchPosts = () => axios.get(urlPosts);
export const createPost = (newPost: Post) => axios.post(urlPosts, newPost);
export const updatePost = (id: Id, updatedPost: Post) =>
  axios.patch(`${urlPosts}/${id}`, updatedPost);
export const deletePost = (id: Id) => axios.delete(`${urlPosts}/${id}`);

export const fetchUsers = () => axios.get(urlUsers);
export const createUser = (newUser: User) => axios.post(urlUsers, newUser);
export const updateUser = (id: Id, updatedUser: User) =>
  axios.patch(`${urlUsers}/${id}`, updatedUser);
export const deleteUser = (id: Id) => axios.delete(`${urlUsers}/${id}`);

export const fetchComments = () => axios.get(urlComments);
export const createComment = (newComment: Comment) =>
  axios.post(urlComments, newComment);
export const updateComment = (id: Id, updatedComment: Comment) =>
  axios.patch(`${urlComments}/${id}`, updatedComment);
export const deleteComment = (id: Id) => axios.delete(`${urlComments}/${id}`);
