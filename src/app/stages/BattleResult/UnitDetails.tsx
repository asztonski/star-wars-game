import { CustomCard } from "../../components/Card/CustomCard";
import { useEffect } from 'react'

interface UnitProps {
  unit: string;
  player: string;
  score: number;
  power: any;
  isReady: boolean;
}

export const UnitDetails: React.FC<UnitProps> = ({
  unit,
  player,
  score,
  power,
  isReady,
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
          {player + `'s`} unit: <span className={`${unit === 'humans' ? 'text-teal-300' : 'text-red-500'}`}>{unit}</span>
        </h3>
        {isReady ? <span className={`text-2xl py-4 text-white px-8 uppercase ${unit === 'humans' ? 'bg-teal-300' : 'bg-red-500'}`}>
          {power}
        </span> : null}
      </div>
    </CustomCard>
  );
};
