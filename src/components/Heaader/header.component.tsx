import { FunctionComponent } from "react";
import { HeaderWrapper, HeaderTitle } from "./header.styles";
import { Button } from "../Button";
import { Link } from "react-router-dom";

type HeaderProps = {
  href: string;
  title: String;
  leftButtonTitle: String;
  rightButtonTitle: String;
  onClick: () => void;
};
export const Header: FunctionComponent<HeaderProps> = ({
  title,
  leftButtonTitle,
  rightButtonTitle,
  onClick,
  href,
}) => {
  return (
    <HeaderWrapper>
      <Button isPrimary={true} label={leftButtonTitle} href={href}></Button>
      <HeaderTitle>{title}</HeaderTitle>
      <Button
        isPrimary={true}
        label={rightButtonTitle}
        href={""}
        onClick={onClick}
      />
    </HeaderWrapper>
  );
};
