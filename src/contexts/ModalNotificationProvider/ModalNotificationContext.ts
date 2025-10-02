import { createContext } from "react";

export type ModalNotification = {
  title: string;
  message: string;
  color?: "red" | "green" | "blue" | "yellow";
};

type ModalNotificationContextType = {
  showModalNotification: (notification: ModalNotification) => void;
};

export const ModalNotificationContext =
  createContext<ModalNotificationContextType>({
    showModalNotification: () => {},
  });
