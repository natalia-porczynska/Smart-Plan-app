import React, { useContext, useEffect } from "react";
import { getPosts } from "../actions/posts";
import { useAppDispatch } from "../hooks/hooks";
import { myContext } from "../Context/ContextProvider";
import Container from "../components/Container";
import Header from "../components/Heaader";
import ContentBox from "../components/ContentBox";
import PostsComponent from "../components/Posts";
import ModalWindow from "../components/Modal";
import { ActionType, ModalType } from "../components/Modal/modal.types";
import { HeaderTitle } from "../components/Heaader/header.types";
import { ButtonLabel } from "../components/Button/button.types";

export const PostsPage = () => {
  const dispatch = useAppDispatch();

  const {
    currentPostId,
    currentUserId,
    isAddItemModalOpen,
    setIsAddItemModalOpen,
    isUpdateItemModalOpen,
    setIsUpdateItemModalOpen,
  } = useContext(myContext);

  useEffect(() => {
    dispatch(getPosts());
  }, [isAddItemModalOpen, isUpdateItemModalOpen, currentPostId]);

  return (
    <Container>
      <ModalWindow
        isOpen={isAddItemModalOpen}
        type={ModalType.POST_MODAL}
        actionType={ActionType.ADD}
        closeModal={setIsAddItemModalOpen.off}
      />
      <ModalWindow
        isOpen={isUpdateItemModalOpen}
        type={ModalType.POST_MODAL}
        actionType={ActionType.UPDATE}
        closeModal={setIsUpdateItemModalOpen.off}
      />
      <Header
        href="/"
        title={HeaderTitle.POST_PAGE + currentUserId}
        leftButtonTitle={ButtonLabel.GO_BACK}
        rightButtonTitle={ButtonLabel.ADD_POST}
        onClick={setIsAddItemModalOpen.on}
      ></Header>
      <ContentBox>
        <PostsComponent openModal={setIsUpdateItemModalOpen.on} />
      </ContentBox>
    </Container>
  );
};
