import { ISkillBanner } from "../../../types/SkillBanner";
import { Container, Information } from "./style";

function SkillBanner({ logo, name, short  }: ISkillBanner) {
  return (
    <Container data-aos="fade-up">
      <img src={logo} alt={`Logo of project: ${name}`} loading="lazy" />
      
      <Information>
        <h3 className="name">{name}</h3>

        <p className="short">{short}</p>
      </Information>
    </Container>
  );
}

export default SkillBanner;