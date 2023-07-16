import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
} from "../../services/getData";
import { Container, Background, Cover, Info, ContainerMovies } from "./styles";
import { getImages } from "../../utils/getImages";
import Pill from "../../components/Pill";
import Credits from "../../components/Credits";
import HeaderDetail from "../../components/HeaderDatail";

const Detail = () => {
  const { id } = useParams();
  const [movieById, setMovieById] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([getMovieById(id), getMovieVideos(id), getMovieCredits(id)])
        .then(([movieById, movieVideos, movieCredits, movieSimilar]) => {
          setMovieById(movieById);
          setMovieVideos(movieVideos);
          setMovieCredits(movieCredits);
        })
        .catch((error) => console.error(error));
    };

    getAllData();
  }, []);
  return (
    <>
      <HeaderDetail />
      {movieById && (
        <>
          <Background $img={getImages(movieById.backdrop_path)} />
          <Container id="detailContainer">
            <Cover>
              <img src={getImages(movieById.poster_path)} alt="Poster" />
            </Cover>
            <Info>
              <h2>{movieById.title}</h2>
              <Pill genres={movieById.genres} />
              <p>{movieById.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <div id="trailers"></div>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="600px"
                    width="80%"
                  ></iframe>
                  <h4>{video.name}</h4>
                </div>
              ))}
          </ContainerMovies>
        </>
      )}
    </>
  );
};

export default Detail;
