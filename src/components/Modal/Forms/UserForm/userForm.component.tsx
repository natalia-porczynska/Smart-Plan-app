import { FunctionComponent, useContext, useState } from "react";
import { useAppDispatch } from "../../../../hooks/hooks";
import { createUser, updateUser } from "../../../../api";
import { myContext } from "../../../../Context/ContextProvider";
import { ActionType } from "../../modal.types";
import { InputType, InputName } from "../form.types";
import { Form, SubmitButton, CancelButton } from "../Form.styles";

type UserFormProps = {
  actionType: ActionType;
  closeModal: () => void;
};

const UserForm: FunctionComponent<UserFormProps> = ({
  actionType,
  closeModal,
}) => {
  const dispatch = useAppDispatch();

  const { currentUserId } = useContext(myContext);

  const [inputs, setInputs] = useState({
    name: "",
    mail: "",
    town: "",
    surename: "",
    job: "",
    age: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event: any) => {
    event.preventDefault();
    if (actionType === ActionType.UPDATE) {
      dispatch(updateUser(currentUserId, inputs));
    } else {
      dispatch(createUser(inputs));
    }
  };

  return (
    <Form onSubmit={handleUserSubmit}>
      <>
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
          <div>Name:</div>
          <input
            type={InputType.TEXT}
            name={InputName.NAME}
            value={inputs.name || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Surename:</div>
          <input
            type={InputType.TEXT}
            name={InputName.SURENAME}
            value={inputs.surename || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Job:</div>

          <input
            type={InputType.TEXT}
            name={InputName.JOB}
            value={inputs.job || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Town:</div>
          <input
            type={InputType.TEXT}
            name={InputName.TOWN}
            value={inputs.town || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          <div>Age:</div>
          <input
            type={InputType.TEXT}
            name={InputName.AGE}
            value={inputs.age || ""}
            className="input"
            onChange={handleChange}
          />
        </label>
        <br></br>
      </>
      <SubmitButton type={InputType.SUBMIT} value="accept"></SubmitButton>
      <br></br>
      <CancelButton onClick={closeModal}>Close</CancelButton>
    </Form>
  );
};

export default UserForm;
