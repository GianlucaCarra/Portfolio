import ShowMore from "../../UI/ShowMore";
import SkillBanner from "../../UI/SkillBanner";
import { Container, Title, SkillList, SkillGrade } from "./style";

function ShortSkills() {
  return (
    <Container id="skills">
      <Title data-aos="fade-up">
        Skills
      </Title>

      <SkillList>
        <SkillGrade>
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
          <SkillBanner logo={"https://github.com/gianlucacarra.png"} name={"asdad"} short={"amakdmakmdkalmksmldkamlskmdmaklsd"} />
        </SkillGrade>
        
        <ShowMore href="/skills" name="See more skills" />
      </SkillList>      
    </Container>
  );
}

export default ShortSkills;