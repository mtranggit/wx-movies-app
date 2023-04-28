// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ApiResponse, API_URL, API_URL_MOVIES, Movie } from '@wx-movies-app/api-interface';
import { MoviesContent } from '@wx-movies-app/movies-content';
import React, {useState, useEffect} from 'react';
import { Center, Loader, Box } from '@mantine/core';
import { ErrorBoundary } from '@wx-movies-app/ui/app-shell';
import { MFE_BORDER } from '../constants';

const MoviesCarousel = React.lazy(() => import('carousel/Module'));

const useProxy = true; // false to use cors
const movieAPIUrl = useProxy ? API_URL_MOVIES :  `http://localhost:3333${API_URL_MOVIES}`;

export function App() {
  const [movies, setMovies] = useState<Movie[]|undefined>(undefined);

  useEffect(() => {
    fetch(movieAPIUrl)
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
    <>
      <ErrorBoundary errorMessage='Unable to load Movies Carousel' delayed={<>Loading</>}>
        <MoviesCarousel /> 
      </ErrorBoundary>
      <Box sx={{border: `${MFE_BORDER}`, padding: '1rem', marginTop: '1rem'}}>
        <MoviesContent movies={movies}/>
      </Box>
    </>
  );
}

export default App;
