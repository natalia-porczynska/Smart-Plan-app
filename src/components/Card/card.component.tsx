import { FunctionComponent } from "react";
import { CardWrapper } from "./card.styles";

type CardProps = {
  children: React.ReactNode;
};

const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
