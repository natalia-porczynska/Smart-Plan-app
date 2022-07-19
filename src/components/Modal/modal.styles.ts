import styled from "styled-components";

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
