import { CustomCard } from "../../components/Card/CustomCard";

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
  const UnitScore = () => {
    return (
      <span className={"absolute left-4 top-4 text-primary uppercase"}>
        score: {score}
      </span>
    );
  };

  const UnitTitle = () => {
    return (
      <h3
        className={
          "text-2xl my-4 text-primary uppercase tracking-widest text-center"
        }
      >
        {player + `'s`} unit:{" "}
        <span
          className={`${unit === "humans" ? "text-human" : "text-starship"}`}
        >
          {unit}
        </span>
      </h3>
    );
  };

  const UnitPower = () => {
    return (
      <span
        className={`text-2xl py-4 text-white px-8 uppercase ${
          unit === "humans" ? "bg-human" : "bg-starship"
        }`}
      >
        {power}
      </span>
    );
  };

  return (
    <CustomCard>
      <UnitScore />
      <div className="flex flex-col items-center justify-between">
        <UnitTitle />
        {isReady ? (
          <UnitPower />
        ) : null}
      </div>
    </CustomCard>
  );
};
