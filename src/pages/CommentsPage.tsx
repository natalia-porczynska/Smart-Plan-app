import React, { useContext, useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { myContext } from "../Context/ContextProvider";
import { getComments } from "../actions/comments";
import Container from "../components/Container";
import Header from "../components/Heaader";
import ContentBox from "../components/ContentBox";
import CommentComponent from "../components/Comments";
import ModalWindow from "../components/Modal";
import { ActionType, ModalType } from "../components/Modal/modal.types";
import { HeaderTitle } from "../components/Heaader/header.types";
import { ButtonLabel } from "../components/Button/button.types";

export const CommentsPage = () => {
  const dispatch = useAppDispatch();

  const {
    currentPostId,
    currentCommentId,
    isAddItemModalOpen,
    setIsAddItemModalOpen,
    isUpdateItemModalOpen,
    setIsUpdateItemModalOpen,
  } = useContext(myContext);

  useEffect(() => {
    dispatch(getComments());
  }, [isAddItemModalOpen, isUpdateItemModalOpen, currentCommentId]);

  return (
    <Container>
      <ModalWindow
        isOpen={isAddItemModalOpen}
        type={ModalType.COMMENT_MODAL}
        actionType={ActionType.ADD}
        closeModal={setIsAddItemModalOpen.off}
      />
      <ModalWindow
        isOpen={isUpdateItemModalOpen}
        type={ModalType.COMMENT_MODAL}
        actionType={ActionType.UPDATE}
        closeModal={setIsUpdateItemModalOpen.off}
      />
      <Header
        href="/userposts"
        title={HeaderTitle.COMMENT_PAGE + currentPostId}
        leftButtonTitle={ButtonLabel.GO_BACK}
        rightButtonTitle={ButtonLabel.ADD_COMMENT}
        onClick={setIsAddItemModalOpen.on}
      ></Header>
      <ContentBox>
        <CommentComponent openModal={setIsUpdateItemModalOpen.on} />
      </ContentBox>
    </Container>
  );
};
