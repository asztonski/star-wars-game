import { Button } from "@/app/components/Button/Button";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

interface ModeButtonProps {
  title: string;
  id: string;
}

export const ModeButton: React.FC<ModeButtonProps> = ({ title, id }) => {
  const { setStage, setGameMode } = useContext(AppContext);

  const onClickHandler = (mode: string) => {
    if (mode === 'single player') {
        setGameMode('single player')
    } else setGameMode('multi player')
    setStage('player name');
  };

  return (
    <Button onClick={() => onClickHandler(id)}>
        <h2
          className={
            "text-5xl text-yellow-300 uppercase italic tracking-widest text-center"
          }
        >
          {title}
        </h2>
    </Button>
  );
};
