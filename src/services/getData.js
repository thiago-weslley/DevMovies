import api from "./api";

export const getMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results[0];
};

export const getTopMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");

  return results;
};

export const getTopSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
};

//DETAIL
export const getMovieById = async (movieId) => {
  const { data } = await api.get(`/movie/${movieId}`);

  return data;
};

export const getMovieVideos = async (movieId) => {
  const {
    data: { results },
  } = await api.get(`/movie/${movieId}/videos`);

  return results;
};

export const getMovieCredits = async (movieId) => {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieId}/credits`);

  return cast;
};