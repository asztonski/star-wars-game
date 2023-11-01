import { Card } from "@mui/material";
import { ReactNode } from "react";

export const CustomCard: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Card
      className={
        `bg-cyan-900 p-10 flex justify-center items-center w-full relative`
      }
    >
      {children}
    </Card>
  );
};
