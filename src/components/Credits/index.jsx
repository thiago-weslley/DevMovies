import { Title, Container } from "./styles";
import { getImages } from "../../utils/getImages";

const Credits = ({ credits }) => {
  return (
    <>
      <Title>Créditos</Title>
      {credits && (
        <Container>
          {credits.slice(0, 5).map((actor) => (
            <div key={actor.id}>
              <img src={getImages(actor.profile_path)} alt="Actor" />
              <p>{actor.original_name}</p>
            </div>
          ))}
        </Container>
      )}
    </>
  );
};

export default Credits;
