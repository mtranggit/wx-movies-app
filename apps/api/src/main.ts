/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { ApiResponse, API_URL } from '@wx-movies-app/api-interface';
import express from 'express';
import * as path from 'path';
import {moviesAsyncData} from './getMovies';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(API_URL, (req, res) => {
  res.send({ message: 'Welcome to api!' } as ApiResponse) ;
});

app.get(`${API_URL}/movies`, async (req, res) => {
  const movies = await moviesAsyncData();
  res.send(movies);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
