import { gql, useQuery } from "@apollo/client";
import ProjectBanner from "../../UI/ProjectBanner";
import ShowMore from "../../UI/ShowMore";
import { Container, Title, ProjectList } from "./style";
import { IProject } from "../../../types/Project";
import Spinner from "../../UI/Spinner";

const GET_PROJECTS_DATA = gql`
  query GetHighlited {
    highlightedProjects {
      id
      projectName
      summary
      imageURL
    }
  }
`;

// const data = {
//   highlightedProjects: [
//     {
//       id: "1",
//       imageURL: "https://github.com/gianlucacarra.png",
//       projectName: "Name test",
//       summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore impedit vero vel ipsam eos quos exercitationem, quo numquam pariatur alias, enim atque molestias fuga voluptate quam debitis itaque officia sunt?",
//     },{
//       id: "2",
//       imageURL: "https://github.com/gianlucacarra.png",
//       projectName: "Name test",
//       summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore impedit vero vel ipsam eos quos exercitationem, quo numquam pariatur alias, enim atque molestias fuga voluptate quam debitis itaque officia sunt?",
//     },{
//       id: "3",
//       imageURL: "https://github.com/gianlucacarra.png",
//       projectName: "Name test",
//       summary: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore impedit vero vel ipsam eos quos exercitationem, quo numquam pariatur alias, enim atque molestias fuga voluptate quam debitis itaque officia sunt?",
//     },
//   ]
// }

function ShortProjects() {
  const { error, loading, data } = useQuery(GET_PROJECTS_DATA);

  if (loading) return <Spinner />
  if (error) return (
    <div 
      style={{ 
        height: 400, 
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
    <Container id="projects">
      <Title data-aos="fade-up">
        Projects
      </Title>

      <ProjectList>
        {
          data.highlightedProjects.map((project: IProject) => {
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

        <ShowMore href="/projects" name="See more projects" />
      </ProjectList>
    </Container>
  );
}

export default ShortProjects;