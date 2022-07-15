import { Users } from "../components/Users";
import { useEffect } from "react";
import { getUsers } from "../actions/users";
import { Container } from "../components/Container";
import { useAppDispatch } from "../hooks/hooks";
import { Header } from "../components/Heaader";
import { ContentBox } from "../components/ContentBox";
import { UserModal } from "../components/UserModal";
import React, { useContext } from "react";
import { myContext } from "../components/ContextProvider";

export const Home = () => {
  const dispatch = useAppDispatch();

  const {
    isAddItemModalOpen,
    setIsAddItemModalOpen,
    isUpdateItemModalOpen,
    setIsUpdateItemModalOpen,
    currentUserId,
  } = useContext(myContext);

  useEffect(() => {
    dispatch(getUsers());
  }, [isAddItemModalOpen, isUpdateItemModalOpen, currentUserId]);
  return (
    <Container>
      <UserModal
        type="ADD"
        isOpen={isAddItemModalOpen}
        onClick={setIsAddItemModalOpen.off}
      />
      <UserModal
        type="UPDATE"
        isOpen={isUpdateItemModalOpen}
        onClick={setIsUpdateItemModalOpen.off}
      />
      <Header
        href={" "}
        title={"HOMEPAGE"}
        leftButtonTitle={"welcome to my app!"}
        rightButtonTitle={"add user"}
        onClick={setIsAddItemModalOpen.on}
      ></Header>
      <ContentBox>
        <Users openModal={setIsUpdateItemModalOpen.on} />
      </ContentBox>
    </Container>
  );
};
