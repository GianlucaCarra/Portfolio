import { Container, Introduction, ScrollFM } from "./style";
import { BsArrowDownShort } from "react-icons/bs";

function SkillsHome() {
  return (
    <Container>
      <Introduction
        data-aos="fade-up"
      >
        <h1>
          SKILLS
        </h1>
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

export default SkillsHome;