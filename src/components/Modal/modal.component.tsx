import { FunctionComponent, useContext } from "react";
import ReactDOM from "react-dom";
import UserForm from "../UserForm";
import PostForm from "../PostForm";
import CommentForm from "../CommentForm";
import { Modal, WindowCard } from "./modal.styles";

type ModalProps = {
  isOpen: boolean;
  type: "USER_MODAL" | "COMMENT_MODAL" | "POST_MODAL";
  actionType: "ADD" | "UPDATE";
  onClick: () => void;
};

const ModalWindow: FunctionComponent<ModalProps> = ({
  isOpen,
  actionType,
  type,
  onClick,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Modal>
      <WindowCard>
        {type === "USER_MODAL" && (
          <UserForm actionType={actionType} onClick={onClick} />
        )}
        {type === "COMMENT_MODAL" && (
          <CommentForm actionType={actionType} onClick={onClick} />
        )}
        {type === "POST_MODAL" && (
          <PostForm actionType={actionType} onClick={onClick} />
        )}
      </WindowCard>
    </Modal>,
    document.body
  );
};

export default ModalWindow;
