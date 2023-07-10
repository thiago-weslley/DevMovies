import api from "../../services/api";
import { Background } from "./styles";

const Home = () => {
  const getMovies = async () => {
    const data = await api.get("/movie/popular");
    console.log(data);
  };

  getMovies();

  return (
    <Background img="https://image.tmdb.org/t/p/original//oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg">
      <div>
        <h2>Home</h2>
      </div>
    </Background>
  );
};

export default Home;
