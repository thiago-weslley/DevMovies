import { useState, useEffect } from "react";
import api from "../../services/api";
import { Background, Container, Info, Poster } from "./styles";

const Home = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[0]);
    };

    getMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background
          img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </Info>
            <Poster>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt="Poster"
              />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
};

export default Home;
