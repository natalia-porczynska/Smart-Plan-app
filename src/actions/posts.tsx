import * as api from "../api/index";

export const getPosts = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};
export const createPost = (post: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updatePost = (id: any, user: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updatePost(id, user);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deletePost = (id: any) => async (dispatch: any) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error: any) {
    console.log(error.message);
  }
};
