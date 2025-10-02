import { Route, Routes } from "react-router-dom";
import HealthCheck from "./HealthCheck";
import Home from "./Home";
import About from "./About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/health-check" element={<HealthCheck />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;
