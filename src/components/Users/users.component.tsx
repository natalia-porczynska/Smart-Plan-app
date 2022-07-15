import React, { FunctionComponent, useContext } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Card } from "../Card";
import { Button } from "../Button";
import { DeleteButton, ButtonHolder, ButtonBottomHolder } from "./users.styles";
import image from "./edit.png";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteUser } from "../../api";
import { myContext } from "../ContextProvider";

type UsersProps = {
  openModal: () => void;
};

export const Users: FunctionComponent<UsersProps> = ({ openModal }) => {
  const users = useAppSelector((state: any) => state.users);
  const dispatch = useAppDispatch();

  const { currentUserId, setCurrentUserId } = useContext(myContext);

  console.log(users);

  const onClick = (id: any) => {
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
            <DeleteButton onClick={() => onClick(user._id)}>X </DeleteButton>
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
              label={"user posts"}
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
