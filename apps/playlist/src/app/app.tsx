// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Playlist } from '@wx-movies-app/playlist-content';
import React from 'react';
import { MFE_BORDER } from '../constants';
import { Box } from '@mantine/core';


export function App() {
  return (
    <Box sx={{border: `${MFE_BORDER}`, padding: '1rem'}}>
      <Playlist />
    </Box>
  );
}

export default App;
