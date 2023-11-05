import { CustomCard } from "./CustomCard";

type UnitProps = {
  unit: string;
  player: string;
  score: number;
  power: any;
  isReady: boolean;
}

export const UnitCard: React.FC<UnitProps> = ({
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
        {player + `'s`} unit:<br />{" "}
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
        className={`text-2xl py-2 text-white px-8 uppercase ${
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
      <div className="flex w-full flex-col items-center justify-between">
        <UnitTitle />
        {isReady ? (
          <UnitPower />
        ) : null}
      </div>
    </CustomCard>
  );
};
