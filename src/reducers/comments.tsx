export default (comments = [], action: any) => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return comments.filter((comment) => comment._id !== action.payload);
    case "UPDATE_COMMENT":
      return comments.map((comment) =>
        comment._id === action.payload._id ? action.payload : comment
      );
    case "FETCH_ALL_COMMENTS":
      return action.payload;
    case "CREATE_COMMENT":
      return comments;
    default:
      return comments;
  }
};
