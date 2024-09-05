import MyImage from "../../../assets/MyImage.png";
import ListItem from "../../UI/ListItem";
import { Container, Title, Introduction, List } from "./style";

function About() {

  return (
    <Container id="about">
      <Title data-aos="fade-up">
        About Me
      </Title>

      <Introduction>
        <img 
          data-aos="fade-up" 
          src={MyImage} 
          loading="lazy" 
          alt="Image of Gianluca Carra"
        />        

        <List data-aos="fade-up">
          <ListItem>
            Full-Stack Developer for 4+ years
          </ListItem>

          <ListItem>
            Experience in several technologies 
          </ListItem>

          <ListItem>
            Focus on performance and scalability
          </ListItem>

          <ListItem>
            Passion for development and challenges
          </ListItem>
        </List>
      </Introduction>
    </Container>
  );
}

export default About;