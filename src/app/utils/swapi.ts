// utils/swapi.ts
const SWAPI_BASE_URL = 'https://swapi.dev/api';

const fetchRandomResource = async (resource: string) => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}/${resource}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch data from SWAPI');
    }
    const data = await response.json();
    const results = data.results;
    const randomIndex = Math.floor(Math.random() * results.length);
    return results[randomIndex];
  } catch (error) {
    throw error;
  }
};

export const fetchRandomPerson = async () => {
  return fetchRandomResource('people');
};

export const fetchRandomStarship = async () => {
  return fetchRandomResource('starships');
};
