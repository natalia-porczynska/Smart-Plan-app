import styled, { keyframes } from "styled-components";

const pulseIcon = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3)
  }
`;
export const DeleteButton = styled.button`
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: transparent;
  border: none;
  right: 0;
  top: -15px;
  cursor: pointer;

  &:hover {
    animation: ${pulseIcon} 0.5s linear infinite alternate;
  }
`;

export const ButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  top: 12px;
  right: 12px;
  position: absolute;
  width: 100%;
  justify-content: flex-end;
  align-items: cnter;
`;

export const ButtonBottomHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;
export const Title = styled.h4`
  align-self: flex-start;
`;
export const Content = styled.text`
  text-align: justify;
`;
