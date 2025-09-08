import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "@routes/Routes";
import { ModalNotificationProvider } from "@contexts/ModalNotificationProvider";

const App = () => {
  return (
    <MantineProvider>
      <ModalNotificationProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ModalNotificationProvider>
    </MantineProvider>
  );
};

export default App;
