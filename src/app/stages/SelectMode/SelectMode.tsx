import { Wrapper as ModeWrapper } from "@/app/components/Container/Wrapper";
import { Button as ModeButton } from "@/app/components/Button/Button";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

export const SelectMode = () => {
  const appContext = useContext(AppContext);

  if (!appContext) return null;
  const { setStage, setGameMode } = appContext;

  const gameModes = [
    { label: "single player", value: "single player" },
    { label: "multi player", value: "multi player" },
  ];

  const setGameModeHandler = (mode: string) => {
    const gameMode = gameModes.find((gm) => gm.value === mode);
    if (gameMode) {
      setGameMode(gameMode.value);
      setStage("player name");
    }
  };

  return (
    <ModeWrapper title="Select game mode" data-testid="wrapper-component">
      {gameModes.map((mode) => (
        <ModeButton
          key={mode.value}
          secondaryStyle
          onClick={() => setGameModeHandler(mode.value)}
          testId="button"
          content={mode.label}
         />
      ))}
    </ModeWrapper>
  );
};
