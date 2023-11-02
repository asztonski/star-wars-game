import { ReactNode } from "react";


interface WrapperProps {
    children: ReactNode;
    title?: string;
  }

export const Wrapper: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <div className={"flex flex-col items-center"}>
      <h2 className={"text-3xl uppercase"}>{title}</h2>
      <div className={"flex gap-10 w-full my-4"}>
        {children}
      </div>
    </div>
  );
};
