import styled, { keyframes } from "styled-components";
import { Button } from "../Button";

export const Modal = styled.div`
  height: 100vh;
  aria-hidden: true;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const WindowCard = styled.div`
  min-width: 200px;
  color: white;
  min-height: 20vh;
  border: 2px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  justify-content: space-around;
  text-align: left;
  line-height: 23px;
  background-color: #282c34;
`;

export const Form = styled.form`
  display: inline-grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SubmitButton = styled.input`
  height: 40px;
  width: 150px;
  margin-top: 20px;
  border-radius: 20px;
  align-sef: center;
  color: #61dafb;
  padding: 0 10px;
  font-size: 18px;
  background-color: #282c34;
  border: 3px solid #61dafb;

  &:hover {
    filter: brightness(130%);
  }
`;
export const CancelButton = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 20px;
  border-radius: 20px;
  align-sef: center;
  color: lightcoral;
  padding: 0 10px;
  font-size: 18px;
  background-color: #282c34;
  border: 3px solid lightcoral;

  &:hover {
    filter: brightness(130%);
  }
`;
