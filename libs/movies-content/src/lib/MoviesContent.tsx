import React from "react";
import { Grid, Title } from "@mantine/core";
import { MovieCard } from "@wx-movies-app/ui/movie-card";
import { Movie } from "@wx-movies-app/api-interface";

type Props = {
  movies: Movie[];
}

export const MoviesContent = ({movies}: Props) => (
  <>
    <Title>Movies</Title>
    <Grid
      sx={{
        gap: "1rem",
      }}
    >
      {movies.map((movie) => (
        <MovieCard {...movie} key={movie.title} showAddButton />
      ))}
    </Grid>
  </>
);
