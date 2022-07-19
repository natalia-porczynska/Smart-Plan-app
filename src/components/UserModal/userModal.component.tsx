import { FunctionComponent, useContext, useState } from "react";
import ReactDOM from "react-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { createUser, updateUser } from "../../api";
import { myContext } from "../../Context/ContextProvider";

import {
  Modal,
  WindowCard,
  Form,
  SubmitButton,
  CancelButton,
} from "./userModal.styles";

type UserModalProps = {
  isOpen: boolean;
  onClick: () => void;
  type: string;
};

const UserModal: FunctionComponent<UserModalProps> = ({
  isOpen,
  onClick,
  type,
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
    if (type === "UPDATE") {
      dispatch(updateUser(currentUserId, inputs));
    } else {
      dispatch(createUser(inputs));
    }
  };

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Modal>
      <WindowCard>
        <Form onSubmit={handleUserSubmit}>
          <>
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
              <div>Name:</div>
              <input
                type="text"
                name="name"
                value={inputs.name || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              <div>Surename:</div>
              <input
                type="text"
                name="surename"
                value={inputs.surename || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              <div>Job:</div>

              <input
                type="text"
                name="job"
                value={inputs.job || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              <div>Town:</div>
              <input
                type="text"
                name="town"
                value={inputs.town || ""}
                className="input"
                onChange={handleChange}
              />
            </label>
            <br></br>
            <label>
              <div>Age:</div>
              <input
                type="text"
                name="age"
                value={inputs.age || ""}
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
      </WindowCard>
    </Modal>,
    document.body
  );
};

export default UserModal;
