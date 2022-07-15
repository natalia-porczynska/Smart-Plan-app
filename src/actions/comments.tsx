import * as api from "../api/index";

export const getComments = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchComments();
    dispatch({ type: "FETCH_ALL_COMMENTS", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const createComment = (comment: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createPost(comment);
    dispatch({ type: "CREATE_COMMENT", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateComment = (id: any, user: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updateComment(id, user);
    dispatch({ type: "UPDATE_COMMENT", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteComment = (id: any) => async (dispatch: any) => {
  try {
    await api.deleteComment(id);

    dispatch({ type: "DELETE_COMMENT", payload: id });
  } catch (error: any) {
    console.log(error.message);
  }
};
