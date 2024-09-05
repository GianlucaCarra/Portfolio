import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import RedirectButton from "../../UI/RedirectButton";
import { Container, Title, ContactList } from "./style";
import { MdOutlineMailOutline } from "react-icons/md";

function Contact() {
  return (
    <Container id="contact">
      <Title data-aos="fade-up">
        Contact
      </Title>

      <ContactList>
        <RedirectButton name="E-mail" href="mailto:contact@giancarra.com" icon={MdOutlineMailOutline} />
        <RedirectButton name="GitHub" href="https://github.com/gianlucacarra" icon={BsGithub} />
        <RedirectButton name="Linkedin" href="https://linkedin.com/in/gianlucacarra" icon={BsLinkedin} />
        <RedirectButton name="Instagram" href="https://instagram.com/giancarradev" icon={BsInstagram} />
        <RedirectButton name="Twitter" href="https://twitter.com/giancarradev" icon={BsTwitterX} />
      </ContactList>      
    </Container>
  );
}

export default Contact;