import ProjectBanner from "../../UI/ProjectBanner";
import { Container } from "./style";

function Projects() {
  return (
    <Container>
        <ProjectBanner 
          image="https://github.com/gianlucacarra.png" 
          name="Project Name Here"
          short="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          page="/name"
        />

        <ProjectBanner 
          image="https://github.com/gianlucacarra.png" 
          name="Project Name Here"
          short="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          page="/name"
        />

        <ProjectBanner 
          image="https://github.com/gianlucacarra.png" 
          name="Project Name Here"
          short="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          page="/name"
        />
    </Container>
  );
}

export default Projects;