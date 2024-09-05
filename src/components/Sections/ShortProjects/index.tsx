import ProjectBanner from "../../UI/ProjectBanner";
import ShowMore from "../../UI/ShowMore";
import { Container, Title, ProjectList } from "./style";
function ShortProjects() {
  return (
    <Container id="projects">
      <Title data-aos="fade-up">
        Projects
      </Title>

      <ProjectList>
        <ProjectBanner 
          image="https://github.com/gianlucacarra.png" 
          name="Project Name Here"
          short=" asdadsa dasdadadsadasdasdasdas asdsadadasdassdas dasdasdasdasdaddaLasdadsa dasdadadsadasdasdasdas asdsadadasdassdas dasdasdasdasdaddaLasdadsa dasdadadsadasdasdasdas asdsadadasdassdas dasdasdasdasdaddaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          page="1"
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

        <ShowMore href="/projects" name="See more projects" />
      </ProjectList>
    </Container>
  );
}

export default ShortProjects;