import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const defaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default defaultLayout;
