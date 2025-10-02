import { Link } from "react-router-dom";
import { Button, Container, Title } from "@mantine/core";

import { useModalNotification } from "@contexts/ModalNotificationProvider";

const About = () => {
  const { showModalNotification } = useModalNotification();

  const handleBackward = () => {
    showModalNotification({
      title: "Turn back!",
      message: "This is a modal notification from About page",
      color: "blue",
    });
  };

  return (
    <Container>
      <Title order={1}>About</Title>
      <Link to="/">
        <Button onClick={handleBackward}>Go Back to Home</Button>
      </Link>
    </Container>
  );
};

export default About;
