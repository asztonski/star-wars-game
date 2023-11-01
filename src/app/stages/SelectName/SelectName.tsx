import { Wrapper } from "@/app/components/Container/Wrapper";
import { NameInput } from "./NameInput";
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";

export const SelectName = () => {
  const { gameMode } = useContext(AppContext);
  const [isPlayerSet, setIsPlayerSet] = useState(false);

  return (
    <Wrapper title="Please insert your name">
      {/* Render player 1 input if is not set yet */}
      {!isPlayerSet ? (
        <NameInput
          setIsPlayerSet={setIsPlayerSet}
          id="player 1"
          placeHolder="Player 1 Name"
        />
      ) : null}
      {/* Render player 2 input if game mode is multi player and first player name is set */}
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
