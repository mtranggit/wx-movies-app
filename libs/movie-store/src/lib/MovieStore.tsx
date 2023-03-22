import {create} from "zustand";

export type Movie = {
  title: string;
  image: string;
};

export const useMovieStore = create<{
  movies: Movie[];
  addMovie: (movie: Movie) => void;
}>((set) => ({
  movies: [],
  addMovie: (movie) => set((state) => ({ movies: [...state.movies, movie] })),
}));
