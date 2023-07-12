import { getImages } from "../../utils/getImages";
import { Container } from "./styles";

const Card = ({ item }) => {
  return (
    <Container>
      <img src={getImages(item.poster_path)} alt="Poster" />
      <h3>{item.title || item.name}</h3>
    </Container>
  );
};

export default Card;
