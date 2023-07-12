import { useState, useEffect } from "react";
import api from "../../services/api";
import { getImages } from "../../utils/getImages";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";

const Home = () => {
  const [movie, setMovie] = useState();
  const [series, setSeries] = useState();
  const [topMovies, setTopMoovies] = useState();
  const [topSeries, setTopSeries] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/popular");

      setMovie(results[0]);
    };

    const getTopMovies = async () => {
      const {
        data: { results },
      } = await api.get("/movie/top_rated");

      setTopMoovies(results);
    };

    const getTopSeries = async () => {
      const {
        data: { results },
      } = await api.get("/tv/top_rated");

      setTopSeries(results);
    };

    const getSeries = async () => {
      const {
        data: { results },
      } = await api.get("/tv/popular");

      setSeries(results);
    };

    getSeries();
    getTopSeries();
    getMovies();
    getTopMovies();
  }, []);

  return (
    <>
      {movie && (
        <Background img={getImages(movie.backdrop_path)}>
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
              <img src={getImages(movie.poster_path)} alt="Poster" />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider title={"Top Filmes"} info={topMovies} />}
      {topSeries && <Slider title={"Top Séries"} info={topSeries} />}
      {series && <Slider title={"Séries em Alta"} info={series} />}
    </>
  );
};

export default Home;
