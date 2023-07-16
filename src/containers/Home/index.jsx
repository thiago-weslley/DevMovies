import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import { Background, Container, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Slider from "../../components/Slider";
import { getMovies, getTopMovies, getTopSeries } from "../../services/getData";

const Home = () => {
  const [movie, setMovie] = useState();
  const [topMovies, setTopMovies] = useState();
  const [topSeries, setTopSeries] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([getMovies(), getTopMovies(), getTopSeries()])
        .then(([movie, topMovies, topSeries]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
        })
        .catch((error) => console.error(error));
    };

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <Background id="homeContainer" $img={getImages(movie.backdrop_path)}>
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
      {topMovies && (
        <div id="topMoviesSlider">
          <Slider title={"Top Filmes"} info={topMovies} />
        </div>
      )}
      {topSeries && (
        <div id="seriesSlider">
          <Slider title={"Top Séries"} info={topSeries} />
        </div>
      )}
    </>
  );
};

export default Home;
