import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieById,
  getMovieVideos,
  getMovieCredits,
  getMovieSimilar,
} from "../../services/getData";
import { Container, Background } from "./styles";
import { getImages } from "../../utils/getImages";

const Detail = () => {
  const { id } = useParams();
  const [movieById, setMovieById] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    const getAllData = async () => {
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movieById, movieVideos, movieCredits, movieSimilar]) => {
          console.log({ movieById, movieVideos, movieCredits, movieSimilar });
          setMovieById(movieById);
          setMovieVideos(movieVideos);
          setMovieCredits(movieCredits);
          setMovieSimilar(movieSimilar);
        })
        .catch((error) => console.error(error));
    };

    getAllData();
  }, []);
  return (
    <>
      {movieById && <Background $img={getImages(movieById.backdrop_path)} />}
      <Container>
        <div>detalhe</div>
      </Container>
    </>
  );
};

export default Detail;
