import { Container } from "@mui/material";
import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return <Container className={'bg-accent p-6 rounded-md'} maxWidth='md'>{children}</Container>;
};
