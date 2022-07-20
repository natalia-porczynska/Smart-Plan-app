import { FunctionComponent, useContext } from "react";
import ReactDOM from "react-dom";
import UserForm from "./Forms/UserForm";
import PostForm from "./Forms/PostForm";
import CommentForm from "./Forms/CommentForm";
import { Modal, WindowCard } from "./modal.styles";
import { ActionType, ModalType } from "./modal.types";

type ModalProps = {
  isOpen: boolean;
  type: ModalType;
  actionType: ActionType;
  closeModal: () => void;
};

const ModalWindow: FunctionComponent<ModalProps> = ({
  isOpen,
  actionType,
  type,
  closeModal,
}) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <Modal>
      <WindowCard>
        {type === "USER_MODAL" && (
          <UserForm actionType={actionType} closeModal={closeModal} />
        )}
        {type === "COMMENT_MODAL" && (
          <CommentForm actionType={actionType} closeModal={closeModal} />
        )}
        {type === "POST_MODAL" && (
          <PostForm actionType={actionType} closeModal={closeModal} />
        )}
      </WindowCard>
    </Modal>,
    document.body
  );
};

export default ModalWindow;
