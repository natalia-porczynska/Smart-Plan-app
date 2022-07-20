import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { createComment, updateComment } from "../../../../api";
import { myContext } from "../../../../Context/ContextProvider";
import { ActionType } from "../../modal.types";

import { Form, SubmitButton, CancelButton } from "../Form.styles";

type CommentFormProps = {
  actionType: ActionType;
  closeModal: () => void;
};

const CommentForm: FunctionComponent<CommentFormProps> = ({
  actionType,
  closeModal,
}) => {
  const dispatch = useAppDispatch();

  const {
    currentUserId,
    currentPostId,
    currentCommentId,
    setIsUpdateItemModalOpen,
    setIsAddItemModalOpen,
  } = useContext(myContext);

  const [inputs, setInputs] = useState({
    author: "",
    title: "",
    content: "",
    mail: "",
    target: "",
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
      dispatch(updateComment(currentCommentId, inputs));
    } else {
      dispatch(createComment(inputs));
    }
  };

  return (
    <>
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
          <label>
            <div>Target:</div>

            <input
              type="text"
              name="target"
              defaultValue={currentPostId}
              className="input"
              onClick={handleChange}
            />
          </label>
          <br></br>
        </>
        <SubmitButton type="submit" value="accept"></SubmitButton>
        <br></br>
        <CancelButton onClick={closeModal}> Close</CancelButton>
      </Form>
    </>
  );
};

export default CommentForm;
