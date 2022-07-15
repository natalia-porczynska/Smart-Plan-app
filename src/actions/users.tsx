import * as api from "../api/index";

export const getUsers = () => async (dispatch: any) => {
  try {
    const { data } = await api.fetchUsers();
    dispatch({ type: "FETCH_ALL_USERS", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};
export const createUser = (user: any) => async (dispatch: any) => {
  try {
    const { data } = await api.createUser(user);
    dispatch({ type: "CREATE_USER", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateUser = (id: any, user: any) => async (dispatch: any) => {
  try {
    const { data } = await api.updateUser(id, user);
    dispatch({ type: "UPDATE_USER", payload: data });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const deleteUser = (id: any) => async (dispatch: any) => {
  try {
    await api.deleteUser(id);

    dispatch({ type: "DELETE_USER", payload: id });
  } catch (error: any) {
    console.log(error.message);
  }
};
