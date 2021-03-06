import React, { FunctionComponent, useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { deletePost } from "../../api";
import { myContext } from "../../Context/ContextProvider";
import Card from "../Card";
import Button from "../Button";
import image from "../../assets/edit.png";
import { ButtonLabel } from "../Button/button.types";

import {
  DeleteButton,
  ButtonHolder,
  ButtonBottomHolder,
  Title,
  Content,
} from "./posts.styles";

type PostsComponentProps = {
  openModal: () => void;
};

export const PostsComponent: FunctionComponent<PostsComponentProps> = ({
  openModal,
}) => {
  const dispatch = useAppDispatch();
  const { currentUserId, setCurrentPostId } = useContext(myContext);

  const posts = useAppSelector((state: any) => state.posts);
  const filteredPosts = posts.filter(
    (post: any) => post.author === currentUserId
  );

  const handleDeletePost = (id: any) => {
    setCurrentPostId(id);
    dispatch(deletePost(id));
  };

  const handleOpenModal = (id: any) => {
    setCurrentPostId(id);
    openModal();
  };

  return (
    <>
      {filteredPosts.map((post: any, index: any) => (
        <Card key={index}>
          <ButtonHolder>
            <DeleteButton onClick={() => handleDeletePost(post._id)}>
              X{" "}
            </DeleteButton>
          </ButtonHolder>
          <div>
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>
            <br></br>
            <h4>{post.mail}</h4>
          </div>
          <ButtonBottomHolder>
            <Button
              onClick={() => setCurrentPostId(post._id)}
              href={"/postcomments"}
              isPrimary={false}
              label={ButtonLabel.COMMENTS}
            />

            <DeleteButton onClick={() => handleOpenModal(post._id)}>
              <img src={image} height="40px" width="40px" />
            </DeleteButton>
          </ButtonBottomHolder>
        </Card>
      ))}
    </>
  );
};

export default PostsComponent;
