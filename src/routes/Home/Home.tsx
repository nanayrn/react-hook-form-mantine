import { Link } from "react-router-dom";
import { Button, Container, Title } from "@mantine/core";

import { useModalNotification } from "@contexts/ModalNotificationProvider";

const Home = () => {
  const { showModalNotification } = useModalNotification();

  return (
    <Container>
      <Title order={1}>Home Page</Title>
      <Button
        onClick={() =>
          showModalNotification({
            title: "Welcome!",
            message: "This is a modal notification on Home page",
            color: "green",
          })
        }
      >
        Show Modal Notification
      </Button>

      <div style={{ marginTop: 20 }}>
        <Link to="/about">
          <Button>Go to About Page</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Home;
