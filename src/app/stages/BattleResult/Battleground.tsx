import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { fetchData } from "@/app/helpers/getPowerData";
import { Wrapper as BattlegroundWrapper } from "@/app/components/Container/Wrapper";
import { UnitCard } from "@/app/components/Card/UnitCard";
import { Button } from "@/app/components/Button/Button";

export const Battleground = () => {
  const [person, setPerson] = useState<number | null>(null);
  const [starship, setStarship] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Set the winner
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

  const appContext = useContext(AppContext);
  if (!appContext) return null;
  const { playersDetails, resetGame } = appContext;

  const player1 = playersDetails[0];
  const player2 = playersDetails[1];

  // Fetch data
  const fetchDataWithTimeout = async () => {
    setLoading(true);
    setError(null);

    try {
      const timeout = 10000;

      const { person, starship } = await Promise.race([
        fetchData(),
        new Promise((_, reject) =>
          setTimeout(() => reject(new Error("Data fetch timed out")), timeout)
        ),
      ]);

      if (person !== null && starship !== null) {
        setPerson(person);
        setStarship(starship);
        const newWinner = person > starship ? "humans" : "starships";
        setWinner(newWinner);
        setDataFetched(true);

        // Update player scores based on the winner
        if (player1.unit === newWinner) {
          player1.score++;
        }
        if (player2.unit === newWinner) {
          player2.score++;
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Custom error message
      setError(
        "Battleground has been destroyed. Please start the battle on another planet."
      );
    } finally {
      setLoading(false);
    }
  };

  // DOM components

  const ResetButtonWrapper = () => {
    
    const resetGameHandler = () => {
      resetGame();
    };

    return (
      <div className={"absolute bottom-5 right-5"}>
        <Button secondaryStyle content="New game" onClick={resetGameHandler} />
      </div>
    );
  };

  const InfoHeading = () => {
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
          <>
          <UnitCard
            key={index}
            score={player.score}
            unit={player.unit}
            player={player.name || "[Computer] Galaxy Destroyer"}
            isReady={dataFetched}
            power={
              player.unit === "humans" ? `mass: ${person}` : `crew: ${starship}`
            }
          />
          {index === 0 ? <span className={'text-4xl self-center'}>VS</span> : null}
          </>
        ))}
      </div>
    );
  };

  const FightButtonWrapper = () => {

    const handleFightClick = async () => {
      fetchDataWithTimeout();
    };

    return (
      <div
        className={`md-w-1/3 m-auto mt-5 md:mt-20 ${
          loading ? "bounce disabled" : ""
        }`}
      >
        <Button
          primaryStyle
          content={loading ? "Units are landing..." : "Fight!"}
          onClick={handleFightClick}
        />
      </div>
    );
  };

  const ContentWrapper = () => {
    return (
      <div className={"flex flex-col my-5 w-full"}>
        <InfoHeading />
        <UnitsWrapper />
        <FightButtonWrapper />
        {error ? <p className="text-red-600">{error}</p> : null}
      </div>
    );
  };

  return (
    <BattlegroundWrapper title="Battleground">
      <ContentWrapper />
      <ResetButtonWrapper />
    </BattlegroundWrapper>
  );
};
