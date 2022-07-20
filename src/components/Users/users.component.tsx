import React, { FunctionComponent, useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { deleteUser } from "../../api";
import { myContext } from "../../Context/ContextProvider";
import Card from "../Card";
import Button from "../Button";
import image from "../../assets/edit.png";
import { DeleteButton, ButtonHolder, ButtonBottomHolder } from "./users.styles";
import { ButtonLabel } from "../Button/button.types";

type UsersProps = {
  openModal: () => void;
};

const Users: FunctionComponent<UsersProps> = ({ openModal }) => {
  const users = useAppSelector((state: any) => state.users);
  const dispatch = useAppDispatch();

  const { setCurrentUserId } = useContext(myContext);

  const handleDeleteUser = (id: any) => {
    setCurrentUserId(id);
    dispatch(deleteUser(id));
  };

  const handleModal = (id: any) => {
    setCurrentUserId(id);
    openModal();
  };

  return (
    <>
      {users.map((user: any, index: any) => (
        <Card key={index}>
          <ButtonHolder>
            <DeleteButton onClick={() => handleDeleteUser(user._id)}>
              X{" "}
            </DeleteButton>
          </ButtonHolder>
          <div>
            {user.name} {user.surename}
            <br></br>
            {user.age} years old, {user.job}
            <br></br>
            {user.mail}
            <br></br>
            {user.town}
          </div>
          <ButtonBottomHolder>
            <Button
              onClick={() => setCurrentUserId(user._id)}
              href={"/userposts"}
              isPrimary={false}
              label={ButtonLabel.POSTS}
            />

            <DeleteButton onClick={() => handleModal(user._id)}>
              <img src={image} height="40px" width="40px" />
            </DeleteButton>
          </ButtonBottomHolder>
        </Card>
      ))}
    </>
  );
};

export default Users;
