import styled from "styled-components";

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
