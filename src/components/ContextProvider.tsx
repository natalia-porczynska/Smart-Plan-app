import React, { useState, createContext } from "react";
import { useBoolean } from "@chakra-ui/hooks";
import { useAppDispatch } from "../hooks/hooks";

export const myContext = createContext<
  React.Dispatch<React.SetStateAction<any>> | any | null
>(null);

export const ContextProvider = (props: any) => {
  const [currentUserId, setCurrentUserId] = useState(undefined);
  const [currentPostId, setCurrentPostId] = useState(" ");
  const [currentCommentId, setCurrentCommentId] = useState(" ");
  const [isUpdateItemModalOpen, setIsUpdateItemModalOpen] = useBoolean(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useBoolean(false);
  return (
    <>
      <myContext.Provider
        value={{
          setCurrentUserId,
          currentUserId,
          currentPostId,
          setCurrentPostId,
          currentCommentId,
          setCurrentCommentId,
          isUpdateItemModalOpen,
          setIsUpdateItemModalOpen,
          isAddItemModalOpen,
          setIsAddItemModalOpen,
        }}
      >
        {props.children}
      </myContext.Provider>
    </>
  );
};
