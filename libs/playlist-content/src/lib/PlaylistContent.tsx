import React from "react";
import { Box, Title, Grid } from "@mantine/core";

// import { useStore } from "store";
import { MovieCard } from "@wx-movies-app/ui/movie-card";
import { Movie } from "@wx-movies-app/movies-content";

export const Playlist = () => {
  // const { movies } = useStore();
  const movies: Movie[] = [];
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
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} />
        ))}
      </Grid>
    </>
  );
};
