import React from "react";
import { Box, Title, Grid } from "@mantine/core";

import { MovieCard } from "@wx-movies-app/ui/movie-card";
import { useMovieStore } from "@wx-movies-app/movie-store";

export const Playlist = () => {
  const { movies } = useMovieStore();
  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid
        mt={20}
        sx={{
          gap: "1rem",
        }}
      >
        {movies.map((movie, i) => (
          <MovieCard {...movie} key={`${movie.title}-${i}`} />
        ))}
      </Grid>
    </>
  );
};
