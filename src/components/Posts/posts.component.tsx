import React, { FunctionComponent, useContext } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { Card } from "../Card";
import { Button } from "../Button";
import {
  DeleteButton,
  ButtonHolder,
  ButtonBottomHolder,
  Title,
  Content,
} from "./posts.styles";
import image from "../Users/edit.png";
import { useAppDispatch } from "../../hooks/hooks";
import { deletePost } from "../../api";
import { myContext } from "../ContextProvider";

type PostsComponentProps = {
  openModal: () => void;
};

export const PostsComponent: FunctionComponent<PostsComponentProps> = ({
  openModal,
}) => {
  const posts = useAppSelector((state: any) => state.posts);
  const dispatch = useAppDispatch();
  const { currentUserId, setCurrentPostId } = useContext(myContext);

  console.log(posts);

  const onClick = (id: any) => {
    console.log(id);
    setCurrentPostId(id);
    dispatch(deletePost(id));
  };

  const handleModal = (id: any) => {
    setCurrentPostId(id);
    openModal();
  };

  return (
    <>
      {posts
        .filter((post: any) => post.author === currentUserId)
        .map((post: any, index: any) => (
          <Card key={index}>
            <ButtonHolder>
              <DeleteButton onClick={() => onClick(post._id)}>X </DeleteButton>
            </ButtonHolder>
            <div>
              <Title>{post.title}</Title>
              <Content>{post.content}</Content>
              <br></br>
              {post.author}
              <br></br>
              {post._id}
              <br></br>
              <h4>{post.mail}</h4>
            </div>
            <ButtonBottomHolder>
              <Button
                onClick={() => setCurrentPostId(post._id)}
                href={"/postcomments"}
                isPrimary={false}
                label={"comments"}
              />

              <DeleteButton onClick={() => handleModal(post._id)}>
                <img src={image} height="40px" width="40px" />
              </DeleteButton>
            </ButtonBottomHolder>
          </Card>
        ))}
    </>
  );
};
