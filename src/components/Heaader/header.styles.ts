import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #282c34;
  border-bottom: 3px solid #61dafb;
`;

export const HeaderTitle = styled.h1`
  border-width: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: white;
  font-size: 30px;
  border-radius: var(--border-width);
`;
