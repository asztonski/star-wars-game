import { Card } from "@mui/material";
import { ReactNode } from "react";

export const CustomCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Card
      className={
        `bg-secondary p-5 flex justify-center items-center w-full relative`
      }
    >
      {children}
    </Card>
  );
};
