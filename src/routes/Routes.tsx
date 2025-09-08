import { Route, Routes } from "react-router-dom";
import HealthCheck from "./HealthCheck";
import Home from "./Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/health-check" element={<HealthCheck />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
