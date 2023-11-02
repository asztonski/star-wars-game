import { CustomCard } from "../../components/Card/CustomCard";
import { useEffect } from 'react'

interface UnitProps {
  unit: string;
  player: string;
  score: number;
  power: any;
}

export const UnitDetails: React.FC<UnitProps> = ({
  unit,
  player,
  score,
  power,
}) => {

  return (
    <CustomCard>
      <div className="flex flex-col items-center justify-between">
        <span className={"absolute left-4 top-4 text-yellow-300 uppercase"}>
          score: {score}
        </span>
        <h3
          className={
            "text-2xl my-4 text-yellow-300 uppercase tracking-widest text-center"
          }
        >
          {player + `'s`} unit: {unit}
        </h3>
        <span className={`text-2xl py-4 text-white px-8 uppercase ${unit === 'humans' ? 'bg-teal-300' : 'bg-red-500'}`}>
          {power}
        </span>
      </div>
    </CustomCard>
  );
};
