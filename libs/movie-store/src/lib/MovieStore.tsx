import { Movie } from "@wx-movies-app/api-interface";
import {create} from "zustand";

type MovieStore = {
  movies: Movie[];
  addMovie: (movie: Movie) => void;
};

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));
