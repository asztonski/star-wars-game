import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { Wrapper } from "@/app/components/Container/Wrapper";
import { TextInput } from "@/app/components/TextInput/TextInput";

export const SelectName = () => {
  const [isPlayerSet, setIsPlayerSet] = useState(false);
  
  const appContext = useContext(AppContext);
    if (!appContext) return null;
  const { gameMode } = appContext;

  return (
    <Wrapper title={`${isPlayerSet ? "Player 2 name:" : "Player 1 name:"}`}>
      {!isPlayerSet ? (
        <TextInput
          setIsPlayerSet={setIsPlayerSet}
          id="player 1"
          placeHolder="Player 1 Name"
        />
      ) : null}
      {gameMode === "multi player" && isPlayerSet ? (
        <TextInput
          setIsPlayerSet={setIsPlayerSet}
          id="player 2"
          placeHolder="Player 2 Name"
        />
      ) : null}
    </Wrapper>
  );
};
