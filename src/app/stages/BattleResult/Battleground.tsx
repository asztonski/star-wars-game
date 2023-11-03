import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { fetchRandomPerson, fetchRandomStarship } from "../../utils/swapi";
import { Loading } from "@/app/components/Loading/Loading";
import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { Button } from "@/app/components/Button/Button";

export const Battleground = () => {
  const { playersDetails } = useContext(AppContext);
  const [person, setPerson] = useState<number | null>(null);
  const [starship, setStarship] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState(false); // Add a flag to track data fetch

  const fetchData = async () => {
    setLoading(true);
    try {
      const randomPerson = await fetchRandomPerson();
      const randomStarship = await fetchRandomStarship();

      const personMass = randomPerson.mass.replace("-", "");
      const starshipCrew = randomStarship.crew.replace("-", "");

      const personAsNumber = parseFloat(personMass);
      const starshipAsNumber = parseFloat(starshipCrew);

      if (!isNaN(personAsNumber) && !isNaN(starshipAsNumber)) {
        setPerson(personAsNumber);
        setStarship(starshipAsNumber);
        setWinner(null); // Reset the winner when fetching new data.
        setDataFetched(true); // Set the flag to true when data is fetched
      } else {
        console.error("Invalid data received.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (dataFetched) {
      if (player1.unit === winner) {
        player1.score++;
      }
      if (player2.unit === winner) {
        player2.score++;
      }
    }
  });

  const handleFightClick = () => {
    fetchData();
  };

  const player1 = playersDetails[0];
  const player2 = playersDetails[1];

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

  return (
    <Wrapper title="Battleground">
      <div className="flex flex-col my-5">
        <h4 className="uppercase text-5xl text-center text-primary">
          {winner ? (
            <>
              <span
                className={
                  winner === "humans" ? "text-human" : "text-starship"
                }
              >
                {winner}
              </span>{" "}
              won the battle!
            </>
          ) : (
            "Prepare for battle!"
          )}
        </h4>

        <div className="flex mt-10 gap-8">
          {playersDetails.map((player: any, index: number) => (
            <UnitDetails
              key={index}
              score={player.score}
              unit={player.unit}
              player={player.name || "[Computer] Galaxy Destroyer"}
              isReady={dataFetched}
              power={
                player.unit === "humans"
                  ? `mass: ${person}`
                  : `crew: ${starship}`
              }
            />
          ))}
        </div>
        <div className="w-1/3 m-auto mt-20">
          <Button
            content={loading ? "Units are landing..." : "Fight!"}
            onClick={handleFightClick}
          />
        </div>
      </div>
    </Wrapper>
  );
};
