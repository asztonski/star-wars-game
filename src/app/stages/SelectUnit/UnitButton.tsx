import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";
import { Button } from "@/app/components/Button/Button";

interface UnitButtonProps {
  fraction: string;
  id: string;
}

export const UnitButton: React.FC<UnitButtonProps> = ({ fraction, id }) => {
  const { setStage, playersDetails, setPlayersDetails } = useContext(AppContext);

  const onClickHandler = (selectedUnit: string) => {
    setStage('result');
    const updatedUnits = [...playersDetails];
    if (selectedUnit === 'Humans') {
      updatedUnits[0].unit = 'humans';
      updatedUnits[1].unit = 'starships';
    } else {
      updatedUnits[0].unit = 'starships';
      updatedUnits[1].unit = 'humans';
    }
    setPlayersDetails(updatedUnits)
  };

  return (
    <Button secondaryStyle onClick={() => onClickHandler(id)}>
        <h2
          className={
            "text-5xl text-primary uppercase italic tracking-widest text-center"
          }
        >
          {fraction}
        </h2>
    </Button>
  );
};
