import { CustomCard } from "../../components/Card/CustomCard";

interface UnitProps {
  unit: string;
  player: string;
  score: number;
}

export const UnitDetails: React.FC<UnitProps> = ({ unit, player, score }) => {
  return (
    <CustomCard>
      <span className={'absolute left-4 top-4 text-yellow-300 uppercase'}>score: {score}</span>
       <h3 className={"text-2xl my-4 text-yellow-300 uppercase tracking-widest text-center"}>{player + `'s`} unit: {unit}</h3>
    </CustomCard>
  );
};
