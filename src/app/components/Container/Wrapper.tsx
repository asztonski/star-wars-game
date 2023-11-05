import { ReactNode } from "react";


interface WrapperProps {
    children: ReactNode;
    title?: string;
  }

export const Wrapper: React.FC<WrapperProps> = ({ children, title }) => {
  return (
    <div data-testid="wrapper-component" className={"flex flex-col items-center"}>
      <h2 className={"text-3xl uppercase mb-5"}>{title}</h2>
      <div className={"flex flex-col md:flex-row gap-10 justify-center w-full my-4"}>
        {children}
      </div>
    </div>
  );
};
