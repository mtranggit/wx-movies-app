import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const Movies = React.lazy(() => import('movies/Module'));

const Playlist = React.lazy(() => import('playlist/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/movies">Movies</Link>
        </li>

        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
