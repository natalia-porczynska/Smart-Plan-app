import { FunctionComponent } from "react";
import { ContainerWrapper } from "./container.styles";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
