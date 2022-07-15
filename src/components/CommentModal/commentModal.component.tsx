import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import ReactDOM from "react-dom";
import { createComment, updateComment } from "../../api";
import { myContext } from "../ContextProvider";

import {
  Modal,
  WindowCard,
  Form,
  SubmitButton,
  CancelButton,
} from "./commentModal.styles";

type CommentModalProps = {
  isOpen: boolean;
  onClick: () => void;
  type: string;
};

export const CommentModal: FunctionComponent<CommentModalProps> = ({
  isOpen,
  onClick,
  type,
}) => {
  const dispatch = useAppDispatch();

  const {
    currentUserId,
    setCurrentUserId,
    currentPostId,
    currentCommentId,
    setCurrentCommentId,
  } = useContext(myContext);

  const [inputs, setInputs] = useState({
    author: "",
    title: "",
    content: "",
    mail: "",
    target: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event: any) => {
    event.preventDefault();
    if (type === "UPDATE") {
      dispatch(updateComment(currentCommentId, inputs));
      console.log("uaktualniono komentarz");
    } else {
      dispatch(createComment(inputs));
      console.log("dodano komentarz");
    }
  };

  console.log(currentPostId);
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Modal>
      <WindowCard>
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
                name="mail"
                defaultValue={currentPostId}
                className="input"
                onClick={handleChange}
              />
            </label>
            <br></br>
          </>
          <SubmitButton type="submit" value="accept"></SubmitButton>
          <br></br>
          <CancelButton onClick={onClick}> Close</CancelButton>
        </Form>
      </WindowCard>
    </Modal>,
    document.body
  );
};
