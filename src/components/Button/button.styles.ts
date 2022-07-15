import styled, { css } from "styled-components";

type ButtonWrapperProps = {
  isPrimary: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  ${({ isPrimary }) =>
    isPrimary &&
    css`
      padding: 30px;
      width: 200px;
    `}
`;

export const PillButton = styled.button`
  height: 40px;
  min-width: 40px;
  border-radius: 20px;
  color: #61dafb;
  padding: 0 10px;
  font-size: 18px;
  background-color: #282c34;
  border: 3px solid #61dafb;

  &:hover {
    filter: brightness(130%);
  }
`;
