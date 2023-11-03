import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { fetchData } from "../../helpers/getPowerData";
import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { Button } from "@/app/components/Button/Button";

export const Battleground = () => {
  const { playersDetails } = useContext(AppContext);
  const [person, setPerson] = useState<number | null>(null);
  const [starship, setStarship] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false);

  const handleFightClick = async () => {
    setLoading(true);
    const { person, starship } = await fetchData();

    if (person !== null && starship !== null) {
      setPerson(person);
      setStarship(starship);
      setWinner(null);
      setDataFetched(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (dataFetched) {
      if (person !== null && starship !== null) {
        if (person > starship) {
          setWinner("humans");
        } else {
          setWinner("starships");
        }
      }
    }
  }, [dataFetched, person, starship]);

  useEffect(() => {
    const player1 = playersDetails[0];
    const player2 = playersDetails[1];
    if (winner !== null) {
      if (player1.unit === winner) {
        player1.score++;
      }
      if (player2.unit === winner) {
        player2.score++;
      }
    }
  }, [winner]);

  const Title = () => {
    return (
      <h4
        className={`uppercase text-5xl text-center ${
          loading ? "bounce" : ""
        } text-primary`}
      >
        {winner && !loading ? (
          <>
            <span
              className={winner === "humans" ? "text-human" : "text-starship"}
            >
              {winner}
            </span>{" "}
            won the battle!
          </>
        ) : (
          "Prepare for battle!"
        )}
      </h4>
    );
  };

  const UnitsWrapper = () => {
    return (
      <div className={"flex flex-col md:flex-row mt-10 gap-8"}>
        {playersDetails.map((player: any, index: number) => (
          <UnitDetails
            key={index}
            score={player.score}
            unit={player.unit}
            player={player.name || "[Computer] Galaxy Destroyer"}
            isReady={dataFetched}
            power={
              player.unit === "humans" ? `mass: ${person}` : `crew: ${starship}`
            }
          />
        ))}
      </div>
    );
  };

  const BattleButton = () => {
    return (
      <div
        className={`md-w-1/3 m-auto mt-20 ${loading ? "bounce disabled" : ""}`}
      >
        <Button
          primaryStyle
          content={loading ? "Units are landing..." : "Fight!"}
          onClick={handleFightClick}
        />
      </div>
    );
  };

  return (
    <Wrapper title="Battleground">
      <div className={"flex flex-col my-5"}>
        <Title />
        <UnitsWrapper />
        <BattleButton />
      </div>
    </Wrapper>
  );
};
