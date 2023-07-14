import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { getImages } from "../../utils/getImages";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import {
  getMovies,
  getSeries,
  getTopMovies,
  getTopSeries,
} from "../../services/getData";

const Home = () => {
  const [movie, setMovie] = useState();
  const [series, setSeries] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();

  useEffect(() => {
    const getAllData = async () => {
      setMovie(await getMovies());
      setSeries(await getSeries());
      setTopMovies(await getTopMovies());
      setTopSeries(await getTopSeries());
    };

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background $img={getImages(movie.backdrop_path)}>
          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
              <div>
                <Link to={`/detalhe/${movie.id}`}>
                  <Button isRed>Assistir Agora</Button>
                </Link>
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
