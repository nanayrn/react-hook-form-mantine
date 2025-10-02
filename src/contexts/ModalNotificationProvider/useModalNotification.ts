import { useContext } from "react";
import { ModalNotificationContext } from "./ModalNotificationContext";

export const useModalNotification = () => {
  const context = useContext(ModalNotificationContext);

  if (!context) {
    throw new Error(
      "useModalNotification must be used within a ModalNotificationProvider"
    );
  }

  return context;
};
