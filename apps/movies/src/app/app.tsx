// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiResponse, API_URL, API_URL_MOVIES, Movie } from '@wx-movies-app/api-interface';
import { MoviesContent } from '@wx-movies-app/movies-content';
import React, {useState, useEffect} from 'react';
import { Center, Loader } from '@mantine/core';

export function App() {
  const [movies, setMovies] = useState<Movie[]|undefined>(undefined);

  useEffect(() => {
    fetch(API_URL_MOVIES)
      .then(r => r.json())
      .then(setMovies)
  },[]);

  if (movies === undefined) {
    return (
      <Center maw={400} h={100} mx="auto">
        <Loader size={48} />
      </Center>
    );
  }

  if (movies.length === 0) {
    return (
      <Center maw={400} h={100} mx="auto">
        <div>No movies</div>
      </Center>
    );
  }

  return (
    <MoviesContent movies={movies}/>
  );
}

export default App;
