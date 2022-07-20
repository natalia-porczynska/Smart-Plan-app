import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { createComment, updateComment } from "../../../../api";
import { myContext } from "../../../../Context/ContextProvider";
import { ActionType } from "../../modal.types";
import { InputType, InputName } from "../form.types";
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

  const { currentUserId, currentPostId, currentCommentId } =
    useContext(myContext);

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

  const handleCommentSubmit = (event: any) => {
    event.preventDefault();
    if (actionType === ActionType.UPDATE) {
      dispatch(updateComment(currentCommentId, inputs));
    } else {
      dispatch(createComment(inputs));
    }
  };

  return (
    <>
      <Form onSubmit={handleCommentSubmit}>
        <>
          <label>
            <div>AuthorId:</div>
            <input
              type={InputType.TEXT}
              name={InputName.AUTHOR}
              defaultValue={currentUserId}
              className="input"
              onClick={handleChange}
            />
          </label>
          <br></br>

          <label>
            <div>Title:</div>
            <input
              type={InputType.TEXT}
              name={InputName.TITLE}
              value={inputs.title || ""}
              className="input"
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            <div>Content:</div>
            <input
              type={InputType.TEXT}
              name={InputName.CONTENT}
              value={inputs.content || ""}
              className="input"
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            <div>Mail:</div>

            <input
              type={InputType.TEXT}
              name={InputName.MAIL}
              value={inputs.mail || ""}
              className="input"
              onChange={handleChange}
            />
          </label>
          <br></br>
          <label>
            <div>Target:</div>

            <input
              type={InputType.TEXT}
              name={InputName.TARGET}
              defaultValue={currentPostId}
              className="input"
              onClick={handleChange}
            />
          </label>
          <br></br>
        </>
        <SubmitButton type={InputType.SUBMIT} value="accept"></SubmitButton>
        <br></br>
        <CancelButton onClick={closeModal}> Close</CancelButton>
      </Form>
    </>
  );
};

export default CommentForm;
