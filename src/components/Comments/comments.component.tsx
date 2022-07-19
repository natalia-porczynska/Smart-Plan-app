import React, { FunctionComponent, useContext } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { deleteComment } from "../../api";
import { myContext } from "../../Context/ContextProvider";
import Card from "../Card";
import image from "../../assets/edit.png";

import {
  DeleteButton,
  ButtonHolder,
  ButtonBottomHolder,
  Title,
  Content,
} from "./comments.styles";

type CommentComponentProps = {
  openModal: () => void;
};

const CommentComponent: FunctionComponent<CommentComponentProps> = ({
  openModal,
}) => {
  const comments = useAppSelector((state: any) => state.comments);
  const dispatch = useAppDispatch();
  const { setCurrentCommentId, currentPostId } = useContext(myContext);

  const onClick = (id: any) => {
    setCurrentCommentId(id);
    dispatch(deleteComment(id));
  };

  const handleModal = (id: any) => {
    setCurrentCommentId(id);
    openModal();
  };

  return (
    <>
      {comments
        .filter((comment: any) => comment.target === currentPostId)
        .map((comment: any, index: any) => (
          <Card key={index}>
            <ButtonHolder>
              <DeleteButton onClick={() => onClick(comment._id)}>
                X{" "}
              </DeleteButton>
            </ButtonHolder>
            <div>
              <Title>{comment.title}</Title>
              <Content>{comment.content}</Content>s<br></br>
              <h4>{comment.mail}</h4>
            </div>
            <ButtonBottomHolder>
              <DeleteButton onClick={() => handleModal(comment._id)}>
                <img src={image} height="40px" width="40px" />
              </DeleteButton>
            </ButtonBottomHolder>
          </Card>
        ))}
    </>
  );
};

export default CommentComponent;
