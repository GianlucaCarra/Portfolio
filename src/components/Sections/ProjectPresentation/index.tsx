import { gql, useQuery } from "@apollo/client";
import Link from "../../UI/Link";
import { Container, Title, Description, Links } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../UI/Spinner";

const GET_PROJECT_DATA = gql`
  query GetProject($id: String) {
    project(id: $id) {
      projectName
      summary
      imageURL
      githubURL
      appURL
    }
  }
`;

function ProjectPresentation() {
  const { id } = useParams();  
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_PROJECT_DATA, {
    variables: { id }
  });

  if (loading) return <Spinner />
  if (error || !data.project) navigate("/notfound");

  const {
    projectName,
    summary,
    imageURL,
    githubURL,
    appURL,
  } = data.project;
  
  return (
    <Container>
      <Title>{projectName}</Title>

      <img src={imageURL} alt="" loading="lazy" />

      <Description>
        <h2>Description:</h2>

        <p>
          {summary}
        </p>
      </Description>

      <Links>
        <h2>Links:</h2>

        <div className="links-list">
          <Link name={"GitHub Repository"} href={githubURL} />
          {appURL !== "" && <Link name={"Website Page"} href={appURL} />}
        </div>
      </Links>
    </Container>
  );
}

export default ProjectPresentation;