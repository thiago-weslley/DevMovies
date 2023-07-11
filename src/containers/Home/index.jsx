import { useState, useEffect } from "react";
import api from "../../services/api";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Button";

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMoovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[8]);
    };

    const getTopMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMoovies(results[0]);
    };

    getMovies();
    getTopMovies();
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
              <div>
                <Button isRed>Assistir Agora</Button>
                <Button>Assistir Trailer</Button>
              </div>
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
