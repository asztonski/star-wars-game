import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { Wrapper } from "@/app/components/Container/Wrapper";
import { NameInput } from "./NameInput";

export const SelectName = () => {
  const { gameMode } = useContext(AppContext);
  const [ isPlayerSet, setIsPlayerSet ] = useState(false);

  return (
    <Wrapper title={`${isPlayerSet ? 'Player 2 name:' : 'Player 1 name:'}`}>
      {!isPlayerSet ? (
        <NameInput
          setIsPlayerSet={setIsPlayerSet}
          id="player 1"
          placeHolder="Player 1 Name"
        />
      ) : null}
      {gameMode === "multi player" && isPlayerSet ? (
        <NameInput
          setIsPlayerSet={setIsPlayerSet}
          id="player 2"
          placeHolder="Player 2 Name"
        />
      ) : null}
    </Wrapper>
  );
};
