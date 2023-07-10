import api from "../../services/api";

const Home = () => {
  const getMovies = async () => {
    const data = await api.get("/movie/popular");
  };

  getMovies();

  return (
    <div>
      <h2>Home</h2>
    </div>
  );
};

export default Home;
