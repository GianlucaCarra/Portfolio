import { Container, Introduction } from "./style";

function NotFoundHome() {
  return (
    <Container>
      <Introduction
        data-aos="fade-up"
      >
        <h1>
          PAGE NOT FOUND
        </h1>

        <h2>
          <a href="/">
            RETURN TO HOME
          </a>
        </h2>
      </Introduction>
    </Container>
  );
}

export default NotFoundHome;