import { Wrapper } from "@/app/components/Container/Wrapper";
import { UnitDetails } from "./UnitDetails";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "@/app/context/AppContext";
import { fetchRandomPerson, fetchRandomStarship } from '../../utils/swapi';
import { Loading } from "@/app/components/Loading/Loading";

export const Result = () => {
  const { playersDetails } = useContext(AppContext);
  const [person, setPerson] = useState(null);
  const [starship, setStarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const randomPerson = await fetchRandomPerson();
        const randomStarship = await fetchRandomStarship();
        setPerson(randomPerson);
        setStarship(randomStarship);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // Handle error
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (person) {
      console.log('Random Person Mass:', person.mass);
    }
    if (starship) {
      console.log('Random Starship Crew:', starship.crew);
    }
  }, [person, starship]);

  return (
    <Wrapper title="Battle Results:">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex gap-4">
          <UnitDetails
            score={playersDetails[0].score}
            unit={playersDetails[0].unit}
            player={playersDetails[0].name}
            power={
              playersDetails[0].unit === "humans"
                ? `mass: ${person.mass}`
                : `crew: ${starship.crew}`
            }
          />
          <span className={'text-5xl self-center'}>VS</span>
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
                ? `mass: ${person.mass}`
                : `crew: ${starship.crew}`
            }
          />
        </div>
      )}
    </Wrapper>
  );
};
