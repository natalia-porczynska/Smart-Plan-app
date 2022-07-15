import { FunctionComponent } from "react";
import { ContentBoxWrapper } from "./contentBox.styles";

type ContentBoxProps = {
  children: React.ReactNode;
};
export const ContentBox: FunctionComponent<ContentBoxProps> = ({
  children,
}) => {
  return <ContentBoxWrapper>{children}</ContentBoxWrapper>;
};
