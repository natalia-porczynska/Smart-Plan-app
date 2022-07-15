import { useEffect } from "react";
import { getComments } from "../actions/comments";
import { Container } from "../components/Container";
import { useAppDispatch } from "../hooks/hooks";
import { Header } from "../components/Heaader";
import { CommentModal } from "../components/CommentModal";
import React, { useContext } from "react";
import { myContext } from "../components/ContextProvider";
import { ContentBox } from "../components/ContentBox";
import { CommentComponent } from "../components/Comments";

export const CommentsPage = () => {
  const dispatch = useAppDispatch();

  const {
    currentPostId,
    currentCommentId,
    setCurrentCommentId,
    currentUserId,
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
