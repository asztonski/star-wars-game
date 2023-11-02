import { CustomCard } from "../../components/Card/CustomCard";
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext";

interface UnitButtonProps {
  fraction: string;
  id: string;
}

export const UnitButton: React.FC<UnitButtonProps> = ({ fraction, id }) => {
  const { setStage, playersDetails, setPlayersDetails } = useContext(AppContext);

  const onClickHandler = (unit: string) => {
    setStage('result');
    const updatedUnits = [...playersDetails];
    if (unit === 'Humans') {
      updatedUnits[0].unit = 'humans';
      updatedUnits[1].unit = 'starships';
    } else {
      updatedUnits[0].unit = 'starships';
      updatedUnits[1].unit = 'humans';
    }
    setPlayersDetails(updatedUnits)
  };

  return (
    <button className={"w-1/2 ease-[ease] duration-[0.34s] hover:scale-110"} onClick={() => onClickHandler(id)}>
      <CustomCard>
        <h2
          className={
            "text-5xl text-yellow-300 uppercase italic tracking-widest text-center"
          }
        >
          {fraction}
        </h2>
      </CustomCard>
    </button>
  );
};