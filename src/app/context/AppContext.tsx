"use client";
import { createContext, useState, ReactNode } from "react";

type PageContextType = {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  firstPlayerUnit: string;
  setFirstPlayerUnit: React.Dispatch<React.SetStateAction<string>>;
  secondPlayerUnit: string;
  setSecondPlayerUnit: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [ isSelected, setIsSelected ] = useState(false)
  const [ firstPlayerUnit, setFirstPlayerUnit ] = useState('');
  const [ secondPlayerUnit, setSecondPlayerUnit ] = useState('');

  return (
    <AppContext.Provider
      value={{
        isSelected,
        setIsSelected,
        firstPlayerUnit,
        setFirstPlayerUnit,
        secondPlayerUnit,
        setSecondPlayerUnit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
