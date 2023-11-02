import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { useContext, useState } from "react";
import { AppContext } from "@/app/context/AppContext";
import { fetchRandomPerson, fetchRandomStarship } from "../../utils/swapi";
import { Loading } from "@/app/components/Loading/Loading";
import { Button } from "@/app/components/Button/Button";

export const Battleground = () => {
  const { playersDetails } = useContext(AppContext);
  const [person, setPerson] = useState<number | null>(null);
  const [starship, setStarship] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const randomPerson = await fetchRandomPerson();
      const randomStarship = await fetchRandomStarship();
      setPerson(randomPerson.mass);
      setStarship(randomStarship.crew);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      // Handle error
    }
  };

  const handleFightClick = () => {
    fetchData(); // Call the fetchData function when the "Fight!" button is clicked
  };

  return (
    <Wrapper title="Battleground">
      <div className={"flex flex-col my-5"}>
        {winner ? <h4 className={'uppercase text-5xl text-center text-yellow-300'}>{winner + " won the battle!"}</h4> : null}
        <div className={"flex mt-10 gap-8"}>
          <UnitDetails
            score={playersDetails[0].score}
            unit={playersDetails[0].unit}
            player={playersDetails[0].name}
            power={
              playersDetails[0].unit === "humans"
                ? `mass: ${person}`
                : `crew: ${starship}`
            }
          />
          <span className={"text-5xl self-center"}>VS</span>
          <UnitDetails
            score={playersDetails[1].score}
            unit={playersDetails[1].unit}
            player={
              playersDetails[1].name !== null
                ? playersDetails[1].name
                : "[Computer] Galaxy Destroyer"
            }
            power={
              playersDetails[1].unit === "humans"
                ? `mass: ${person}`
                : `crew: ${starship}`
            }
          />
        </div>
        <div className={'w-1/3 m-auto mt-20'}>
          <Button content="Fight!" onClick={handleFightClick} />
        </div>
      </div>
    </Wrapper>
  );
};
