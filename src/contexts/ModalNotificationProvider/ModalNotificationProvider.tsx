import { createContext, useContext, useState } from "react";
import { Button, Modal, Text } from "@mantine/core";

type ModalNotificationProviderProps = {
  children: React.ReactNode;
};

type ModalNotification = {
  title: string;
  message: string;
  color?: "red" | "green" | "blue" | "yellow";
};

type ModalNotificationContextType = {
  showModalNotification: (notification: ModalNotification) => void;
};

const ModalNotificationContext = createContext<ModalNotificationContextType>({
  showModalNotification: () => {},
});

const ModalNotificationProvider = (props: ModalNotificationProviderProps) => {
  const [notification, setNotification] = useState<ModalNotification | null>(
    null
  );

  const showModalNotification = (notif: ModalNotification) => {
    setNotification(notif);
  };

  const closeModal = () => setNotification(null);

  return (
    <ModalNotificationContext.Provider value={{ showModalNotification }}>
      {props.children}
      <Modal
        opened={!!notification}
        onClose={closeModal}
        title={notification?.title}
        centered
      >
        <Text c={notification?.color}>{notification?.message}</Text>
        <Button mt="md" fullWidth onClick={closeModal}>
          OK
        </Button>
      </Modal>
    </ModalNotificationContext.Provider>
  );
};

const useModalNotification = () => {
  const context = useContext(ModalNotificationContext);

  if (!context) {
    throw new Error(
      "useModalNotification must be used within a ModalNotificationProvider"
    );
  }

  return context;
};

export { useModalNotification };
export default ModalNotificationProvider;
