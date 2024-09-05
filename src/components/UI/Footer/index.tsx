import { BsGithub } from "react-icons/bs";
import { Container } from "./style";

function Footer() {
  return (
    <Container>
      <h2 className="MB">Made By Gianluca Carra</h2>

      <div className="separator"></div>

      <a href="https://github.com/gianlucacarra/portfolio" target="_blank">
        <BsGithub /> 
        GitHub Page of this project
      </a>    
    </Container>
  );
}

export default Footer;