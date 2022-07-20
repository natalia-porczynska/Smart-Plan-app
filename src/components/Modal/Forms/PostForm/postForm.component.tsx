import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { createPost, updatePost } from "../../../../api";
import { myContext } from "../../../../Context/ContextProvider";
import { ActionType } from "../../modal.types";
import { InputType, InputName } from "../form.types";
import { Form, SubmitButton, CancelButton } from "../Form.styles";

type PostFormProps = {
  actionType: ActionType;
  closeModal: () => void;
};

const PostForm: FunctionComponent<PostFormProps> = ({
  actionType,
  closeModal,
}) => {
  const dispatch = useAppDispatch();

  const { currentUserId, currentPostId } = useContext(myContext);
  const [inputs, setInputs] = useState({
    author: "",
    title: "",
    content: "",
    mail: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handlePostSubmit = (event: any) => {
    event.preventDefault();
    if (actionType === ActionType.UPDATE) {
      dispatch(updatePost(currentPostId, inputs));
    } else {
      dispatch(createPost(inputs));
    }
  };

  return (
    <Form onSubmit={handlePostSubmit}>
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
      </>
      <SubmitButton type={InputType.SUBMIT} value="accept"></SubmitButton>
      <br></br>
      <CancelButton onClick={closeModal}> Close</CancelButton>
    </Form>
  );
};

export default PostForm;
