import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { createPost, updatePost } from "../../api";
import { myContext } from "../../Context/ContextProvider";

import { Form, SubmitButton, CancelButton } from "./postForm.styles";

type PostFormProps = {
  actionType: "ADD" | "UPDATE";
  onClick: () => void;
};

const PostForm: FunctionComponent<PostFormProps> = ({
  actionType,
  onClick,
}) => {
  const dispatch = useAppDispatch();

  const {
    currentUserId,
    currentPostId,
    setIsUpdateItemModalOpen,
    setIsAddItemModalOpen,
  } = useContext(myContext);
  const [inputs, setInputs] = useState({
    author: "",
    title: "",
    content: "",
    mail: "",
  });
  const handleCloseModal = () => {
    if (actionType === "UPDATE") {
      setIsUpdateItemModalOpen(false);
    } else {
      setIsAddItemModalOpen(false);
    }
  };

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event: any) => {
    event.preventDefault();
    if (actionType === "UPDATE") {
      dispatch(updatePost(currentPostId, inputs));
    } else {
      dispatch(createPost(inputs));
    }
  };

  return (
    <Form onSubmit={handleUserSubmit}>
      <>
        <label>
          <div>AuthorId:</div>
          <input
            type="text"
            name="author"
            defaultValue={currentUserId}
            className="input"
            onClick={handleChange}
          />
        </label>
        <br></br>

        <label>
          <div>Title:</div>
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Content:</div>
          <input
            type="text"
            name="content"
            value={inputs.content || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Mail:</div>

          <input
            type="text"
            name="mail"
            value={inputs.mail || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
      </>
      <SubmitButton type="submit" value="accept"></SubmitButton>
      <br></br>
      <CancelButton onClick={onClick}> Close</CancelButton>
    </Form>
  );
};

export default PostForm;
