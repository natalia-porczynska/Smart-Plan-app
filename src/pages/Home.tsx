import React, { useContext, useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { getUsers } from "../actions/users";
import { myContext } from "../Context/ContextProvider";
import Users from "../components/Users";
import Container from "../components/Container";
import Header from "../components/Heaader";
import ContentBox from "../components/ContentBox";
import UserModal from "../components/UserModal";

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
