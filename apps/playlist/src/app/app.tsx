// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Playlist } from '@wx-movies-app/playlist-content';
import React from 'react';

const MoviesCarousel = React.lazy(() => import('carousel/Module'));

export function App() {
  return (
    <>
      <React.Suspense fallback={<div>Movies carousel loading</div>}>
        <MoviesCarousel /> 
      </React.Suspense>
      <Playlist />
    </>
  );
}

export default App;
