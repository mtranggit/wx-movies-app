// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Playlist } from '@wx-movies-app/playlist-content';
import { ErrorBoundary } from '@wx-movies-app/ui/app-shell';
import React from 'react';

const MoviesCarousel = React.lazy(() => import('carousel/Module'));

export function App() {
  return (
    <>
      <ErrorBoundary errorMessage='Unable to load Movies Carousel' delayed={<>Loading</>}>
        <React.Suspense fallback={<div>Movies carousel loading</div>}>
          <MoviesCarousel /> 
        </React.Suspense>
      </ErrorBoundary>
      <Playlist />
    </>
  );
}

export default App;
