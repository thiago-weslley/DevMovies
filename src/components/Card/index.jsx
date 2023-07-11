import { getImages } from "../../utils/getImages";
import { Container } from "./styles";

const Card = ({ item }) => {
  return (
    <Container>
      <img src={getImages(item.poster_path)} alt="" />
      <h3>{item.title}</h3>
    </Container>
  );
};

export default Card;
