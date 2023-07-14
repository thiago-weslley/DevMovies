import api from "./api";

export const getMovies = async () => {
  const {
    data: { results },
  } = await api.get("/movie/popular");

  return results[0];
};

export const getSeries = async () => {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");

  return results;
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


