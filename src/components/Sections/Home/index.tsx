import { Container, Introduction, ScrollFM } from "./style";
import { BsArrowDownShort } from "react-icons/bs";

function Home() {
  return (
    <Container id="home">
      <Introduction
        data-aos="fade-up"
      >
        <h1>
          GIANLUCA CARRA
        </h1>

        <h2>
          FULL-STACK DEVELOPER
        </h2>
      </Introduction>

      <ScrollFM
        data-aos="fade-up"
      >
        Scroll to view
        <BsArrowDownShort />
      </ScrollFM>
    </Container>
  );
}

export default Home;