import { gql, useQuery } from "@apollo/client";
import Link from "../../UI/Link";
import { Container, Title, Description, Links } from "./style";
import { useParams } from "react-router-dom";

const GET_PROJECT_DATA = gql`
    query GetProject($id: ID!) {
      project(id: $id) {
        projectName,
        summary,
        imageURL,
        githubURL,
        appURL
      }
    }
  `;

function ProjectPresentation() {
  const id = useParams();  
  const { loading, error, data } = useQuery(GET_PROJECT_DATA, {
    variables: { id }
  });

  console.log(data)
  if (loading) 
  if (error) 

  return (
    <Container>
      <Title>{data.projectName}</Title>

      <img src="https://github.com/gianlucacarra.png" alt="" loading="lazy" />

      <Description>
        <h2>Description:</h2>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat amet numquam 
          magni facere odio animi, unde voluptatem quidem molestias iure dignissimos 
          nobis cum at quibusdam aperiam similique tempore laboriosam. Reprehenderit?
        </p>
      </Description>

      <Links>
        <h2>Links:</h2>

        <div className="links-list">
          <Link name={"GitHub Repository"} href={"https://github.com/gianlucacarra"} />
          <Link name={"Website Page"} href={"https://github.com/gianlucacarra"} />
        </div>
      </Links>
    </Container>
  );
}

export default ProjectPresentation;