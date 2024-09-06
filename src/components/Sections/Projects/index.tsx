import { gql, useQuery } from "@apollo/client";
import ProjectBanner from "../../UI/ProjectBanner";
import { Container } from "./style";
import Spinner from "../../UI/Spinner";
import { IProject } from "../../../types/Project";

const GET_PROJECTS_DATA = gql`
  query GetProjects {
    projects {
      id
      projectName
      summary
      imageURL
    }
  }
`;

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS_DATA);

  if (loading) return <Spinner />
  if (error) return (
    <div 
      style={{ 
        height: 800, 
        display: "grid", 
        placeItems: "center",
        marginTop: -100,
        textAlign: "center"
      }}
      data-aos="fade-up"
    >
      An error occurred while loading the projects
    </div>
  );
  
  return (
    <Container>
        {
          data.projects.map((project: IProject) => {
            return (
              <ProjectBanner 
                key={project.id}
                image={project.imageURL}
                name={project.projectName}
                short={project.summary}
                page={project.id}
              />
            );
          })
        }
    </Container>
  );
}

export default Projects;