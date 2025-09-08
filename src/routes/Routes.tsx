import { Route, Routes } from "react-router-dom";
import HealthCheck from "./HealthCheck";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/health-check" element={<HealthCheck />} />
    </Routes>
  );
};

export default AppRoutes;
