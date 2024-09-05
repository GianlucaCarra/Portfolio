import Header from "../../components/UI/Header";
import AOS from 'aos';
import { Container } from "./style";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Contact from "../../components/Sections/Contact";
import Footer from "../../components/UI/Footer";
import ProjectPresentation from "../../components/Sections/ProjectPresentation";

function ProjectPage() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
    });
  }, []);
  
  return (
    <Container>
      <Header />

      <ProjectPresentation />
      
      <Contact />

      <Footer />
    </Container>
  );
}

export default ProjectPage;