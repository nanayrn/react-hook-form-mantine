import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@routes/Routes";
import { ModalNotificationProvider } from "@contexts/ModalNotificationProvider";

import "@mantine/core/styles.css";
import { theme } from "@components/themes";

const App = () => {
  return (
    <MantineProvider theme={theme}>
      <ModalNotificationProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ModalNotificationProvider>
    </MantineProvider>
  );
};

export default App;
