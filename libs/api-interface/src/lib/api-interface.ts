export interface ApiResponse {
  message: string;
}

export type Movie = {
  title: string;
  image: string;
};

export const API_URL = '/api';
export const API_URL_MOVIES = '/api/movies';