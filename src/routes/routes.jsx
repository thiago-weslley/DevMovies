import { Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";

const Router = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      <Route path="/detalhe/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
