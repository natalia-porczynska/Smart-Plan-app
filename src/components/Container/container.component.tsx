import { FunctionComponent } from "react";
import { ContainerWrapper } from "./container.styles";

type ContainerProps = {
  children: React.ReactNode;
};
export const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};
