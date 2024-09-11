import { gql, useQuery } from "@apollo/client";
import ShowMore from "../../UI/ShowMore";
import SkillBanner from "../../UI/SkillBanner";
import { Container, Title, SkillList, SkillGrade } from "./style";
import Spinner from "../../UI/Spinner";
import { ISkill } from "../../../types/Skill";

const GET_SKILLS_DATA = gql`
  query GetSkills {
    highlightedSkills {
      id
      imageURL
      skill
      summary
    }
  }
`;

function ShortSkills() {
  const { loading, error, data } = useQuery(GET_SKILLS_DATA);

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
      An error occurred while loading the skills
    </div>
  );

  return (
    <Container id="skills">
      <Title data-aos="fade-up">
        Skills
      </Title>

      <SkillList>
        <SkillGrade>
          {
            data.highlightedSkills.map((skill: ISkill) => {
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
        </SkillGrade>
        
        <ShowMore href="/skills" name="See more skills" />
      </SkillList>      
    </Container>
  );
}

export default ShortSkills;