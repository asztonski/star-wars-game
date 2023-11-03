import { fetchRandomPerson, fetchRandomStarship } from "../utils/swapi";

export const fetchData = async () => {
  try {
    const randomPerson = await fetchRandomPerson();
    const randomStarship = await fetchRandomStarship();

    const personMass = randomPerson.mass.replace("-", "");
    const starshipCrew = randomStarship.crew.replace("-", "");

    const personAsNumber = parseFloat(personMass);
    const starshipAsNumber = parseFloat(starshipCrew);

    if (!isNaN(personAsNumber) && !isNaN(starshipAsNumber)) {
      return { person: personAsNumber, starship: starshipAsNumber };
    } else {
      console.error("Invalid data received.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};