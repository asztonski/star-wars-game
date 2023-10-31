// src/routes/swapi.ts
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/getRandomData', async (req, res) => {
  try {
    const randomPersonResponse = await axios.get('https://swapi.dev/api/people/');
    const randomStarshipResponse = await axios.get('https://swapi.dev/api/starships/');

    const randomPerson = randomPersonResponse.data.results[Math.floor(Math.random() * randomPersonResponse.data.count)];
    const randomStarship = randomStarshipResponse.data.results[Math.floor(Math.random() * randomStarshipResponse.data.count)];


    const data = {
      randomPerson,
      randomStarship,
    };

    console.log('Random Person:', randomPerson);
    console.log('Random Starship:', randomStarship);

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;