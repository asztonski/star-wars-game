import { Button } from "@/app/components/Button/Button";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

interface ModeButtonProps {
  title: string;
  id: string;
}

export const ModeButton: React.FC<ModeButtonProps> = ({ title, id }) => {
  const { setStage, setGameMode } = useContext(AppContext);

  const setGameModeHandler = (mode: string) => {
    const gameMode = mode === "single player" ? "single player" : "multi player";
    setGameMode(gameMode);
    setStage("player name");
  };

  return (
    <Button secondaryStyle onClick={() => setGameModeHandler(id)}>
        <h2
          className={
            "text-5xl text-primary uppercase italic tracking-widest text-center"
          }
        >
          {title}
        </h2>
    </Button>
  );
};
