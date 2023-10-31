import { CustomCard } from "../Card/CustomCard";

interface UnitProps {
  unit: string;
  player: string;
}

export const UnitDetails: React.FC<UnitProps> = ({ unit, player }) => {
  return (
    <CustomCard>
       <h3 className={"text-2xl text-yellow-300 uppercase tracking-widest text-center"}>{player + `'s`} unit: {unit}</h3>
    </CustomCard>
  );
};
