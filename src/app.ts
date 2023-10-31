import express from 'express';
import swapiRoutes from './app/api/api';

const app = express();
const port = 3000;

app.use('/swapi', swapiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
