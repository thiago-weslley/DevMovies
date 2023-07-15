import { Container } from "./styles";

const Pill = ({ genres }) => {
  return (
    <Container>
      {genres &&
        genres.map((genre) => <span key={genre.id}>{genre.name}</span>)}
    </Container>
  );
};

export default Pill;
