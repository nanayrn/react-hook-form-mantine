import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <MantineProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
