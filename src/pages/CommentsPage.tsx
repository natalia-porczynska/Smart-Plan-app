import React, { useContext, useEffect } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { myContext } from "../Context/ContextProvider";
import { getComments } from "../actions/comments";
import Container from "../components/Container";
import Header from "../components/Heaader";
import CommentModal from "../components/CommentModal";
import ContentBox from "../components/ContentBox";
import CommentComponent from "../components/Comments";

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
      <CommentModal
        type="ADD"
        isOpen={isAddItemModalOpen}
        onClick={setIsAddItemModalOpen.off}
      />
      <CommentModal
        type="UPDATE"
        isOpen={isUpdateItemModalOpen}
        onClick={setIsUpdateItemModalOpen.off}
      />
      <Header
        href="/userposts"
        title={"Post ID: " + currentPostId}
        leftButtonTitle={"go back"}
        rightButtonTitle={"add comment"}
        onClick={setIsAddItemModalOpen.on}
      ></Header>
      <ContentBox>
        <CommentComponent openModal={setIsUpdateItemModalOpen.on} />
      </ContentBox>
    </Container>
  );
};
