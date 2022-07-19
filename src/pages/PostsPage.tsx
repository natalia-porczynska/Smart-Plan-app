import React, { useContext, useEffect } from "react";
import { getPosts } from "../actions/posts";
import { useAppDispatch } from "../hooks/hooks";
import { myContext } from "../Context/ContextProvider";
import Container from "../components/Container";
import Header from "../components/Heaader";
import PostModal from "../components/PostModal";
import ContentBox from "../components/ContentBox";
import PostsComponent from "../components/Posts";

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
      <PostModal
        type="ADD"
        isOpen={isAddItemModalOpen}
        onClick={setIsAddItemModalOpen.off}
      />
      <PostModal
        type="UPDATE"
        isOpen={isUpdateItemModalOpen}
        onClick={setIsUpdateItemModalOpen.off}
      />
      <Header
        href="/"
        title={"USER ID: " + currentUserId}
        leftButtonTitle={"go back"}
        rightButtonTitle={"add post"}
        onClick={setIsAddItemModalOpen.on}
      ></Header>
      <ContentBox>
        <PostsComponent openModal={setIsUpdateItemModalOpen.on} />
      </ContentBox>
    </Container>
  );
};
