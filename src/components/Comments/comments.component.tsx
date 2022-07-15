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
} from "./comments.styles";
import image from "../Users/edit.png";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteComment } from "../../api";
import { myContext } from "../ContextProvider";

type CommentComponentProps = {
  openModal: () => void;
};

export const CommentComponent: FunctionComponent<CommentComponentProps> = ({
  openModal,
}) => {
  const comments = useAppSelector((state: any) => state.comments);
  const dispatch = useAppDispatch();
  const {
    currentUserId,
    setCurrentPostId,
    currentPostId,
    setCurrentCommentId,
  } = useContext(myContext);

  console.log(comments);
  console.log("hello");

  const onClick = (id: any) => {
    console.log(id);
    setCurrentCommentId(id);
    dispatch(deleteComment(id));
  };

  const handleModal = (id: any) => {
    setCurrentCommentId(id);
    openModal();
  };

  return (
    <>
      {comments.map((comment: any, index: any) => (
        <Card key={index}>
          <ButtonHolder>
            <DeleteButton onClick={() => onClick(comment._id)}>X </DeleteButton>
          </ButtonHolder>
          <div>
            <Title>{comment.title}</Title>
            <Content>{comment.content}</Content>
            <br></br>
            {comment.author}
            <br></br>
            <h4>{comment.mail}</h4>
          </div>
          <ButtonBottomHolder>
            <Button
              onClick={() => setCurrentCommentId(comment._id)}
              href={"/postcomments"}
              isPrimary={false}
              label={"comments"}
            />

            <DeleteButton onClick={() => handleModal(comment._id)}>
              <img src={image} height="40px" width="40px" />
            </DeleteButton>
          </ButtonBottomHolder>
        </Card>
      ))}
    </>
  );
};
