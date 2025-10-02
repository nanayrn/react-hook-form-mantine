import { useState } from "react";
import { Button, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
  ModalNotificationContext,
  type ModalNotification,
} from "./ModalNotificationContext";

type ModalNotificationProviderProps = {
  children: React.ReactNode;
};

const ModalNotificationProvider = (props: ModalNotificationProviderProps) => {
  const [opened, { open, close }] = useDisclosure();
  const [notification, setNotification] = useState<ModalNotification | null>(
    null
  );

  const showModalNotification = (notification: ModalNotification) => {
    setNotification(notification);
    open();
  };

  return (
    <ModalNotificationContext.Provider value={{ showModalNotification }}>
      {props.children}
      <Modal
        opened={opened}
        onClose={close}
        title={notification?.title}
        centered
      >
        <Text c={notification?.color}>{notification?.message}</Text>
        <Button mt="md" onClick={close}>
          OK
        </Button>
      </Modal>
    </ModalNotificationContext.Provider>
  );
};

export default ModalNotificationProvider;
