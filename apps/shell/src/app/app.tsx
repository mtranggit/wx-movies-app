import * as React from 'react';

import {AppShell} from '@wx-movies-app/ui/app-shell';
import { Box } from '@mantine/core';
import { MFE_BORDER } from '../constants';

const Movies = React.lazy(() => import('movies/Module'));

const Playlist = React.lazy(() => import('playlist/Module'));

export function App() {

  return (
    <Box sx={{border: `${MFE_BORDER}`}}>
      <AppShell
        title="My Movies App"
        colorScheme="light"
        routes={[
          {
            path: "/",
            element: Movies 
          },
          {
            path: "/playlist",
            element: Playlist,
          },
        ]}
        navLinks={[
          {
            label: "Home",
            path: "/",
          },
          {
            label: "Playlist",
            path: "/playlist",
          },
        ]}
      />
    </Box>
  );
}

export default App;
