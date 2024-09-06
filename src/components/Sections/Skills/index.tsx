import { gql, useQuery } from "@apollo/client";
import SkillBanner from "../../UI/SkillBanner";
import { Container } from "./style";
import Spinner from "../../UI/Spinner";
import { ISkill } from "../../../types/Skill";

const GET_SKILLS_DATA = gql`
  query GetSkills {
    skills {
      id
      imageURL
      skill
      summary
    }
  }
`;

function Skills() {
  const { loading, error, data } = useQuery(GET_SKILLS_DATA);

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
      An error occurred while loading the skills
    </div>
  );
  
  return (
    <Container>
      {
        data.skills.map((skill: ISkill) => {
          return (
            <SkillBanner 
              key={skill.id}
              logo={skill.imageURL} 
              name={skill.skill} 
              short={skill.summary} 
            />
          );
        })
      }
    </Container>
  );
}

export default Skills;