import { FunctionComponent } from "react";
import { ButtonWrapper, PillButton } from "./button.styles";
import { Link } from "react-router-dom";

type ButtonProps = {
  isPrimary: boolean;
  label: String;
  href: string;
  onClick?: () => void;
};
export const Button: FunctionComponent<ButtonProps> = ({
  isPrimary = true,
  label = "go back",
  href,
  onClick,
}) => {
  return (
    <ButtonWrapper isPrimary={isPrimary}>
      <Link to={href}>
        <PillButton onClick={onClick}>{label}</PillButton>
      </Link>
    </ButtonWrapper>
  );
};
