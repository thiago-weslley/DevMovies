import { useState, useEffect } from "react";
import api from "../../services/api";
import { Background } from "./styles";

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[1]);
    };

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
          </div>
        </Background>
      )}
    </>
  );
};

export default Home;
