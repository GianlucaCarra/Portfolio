import { IProjectBanner } from "../../../types/ProjectBanner";
import { Container, Information, RMButton } from "./style";

function ProjectBanner({ image, name, short, page }: IProjectBanner) {
  return (
    <Container data-aos="fade-up">
      <img src={image} alt={`Image of project: ${name}`} loading="lazy" />
      
      <Information>
        <h3 className="name">{name}</h3>

        <p className="short">{short}</p>

        <RMButton href={`/project/${page}`}>
          Read more
        </RMButton>
      </Information>
    </Container>
  );
}

export default ProjectBanner;