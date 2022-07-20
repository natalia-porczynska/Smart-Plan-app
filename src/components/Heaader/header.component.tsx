import { FunctionComponent } from "react";
import Button from "../Button";
import { HeaderWrapper, HeaderTitle } from "./header.styles";

type HeaderProps = {
  href: string;
  title: string;
  leftButtonTitle: string;
  rightButtonTitle: string;
  onClick: () => void;
};

const Header: FunctionComponent<HeaderProps> = ({
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

export default Header;
