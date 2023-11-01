'use client'
import React, { createContext, useState, ReactNode } from "react";

type PageContextType = {
  stage: string;
  setStage: React.Dispatch<React.SetStateAction<string>>;
  gameMode: string;
  setGameMode: React.Dispatch<React.SetStateAction<string>>;
  playersDetails: object[];
  setPlayersDetails: React.Dispatch<React.SetStateAction<object[]>>;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<PageContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [stage, setStage] = useState<string>("game mode");
  const [gameMode, setGameMode] = useState<string>("");
  const [playersDetails, setPlayersDetails] = useState<object[]>([
    { name: null, unit: null, score: 0 },
    { name: null, unit: null, score: 0 }
  ]);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        stage,
        setStage,
        gameMode,
        setGameMode,
        playersDetails,
        setPlayersDetails,
        isSelected,
        setIsSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
