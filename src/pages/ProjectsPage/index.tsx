import Header from "../../components/UI/Header";
import AOS from 'aos';
import { Container } from "./style";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Footer from "../../components/UI/Footer";
import ProjectsHome from "../../components/Sections/ProjectsHome";
import Projects from "../../components/Sections/Projects";
import Contact from "../../components/Sections/Contact";

function ProjectsPage() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
    });
  }, []);
  
  return (
    <Container>
      <Header />

      <ProjectsHome />

      <Projects />

      <Contact />
      
      <Footer />
    </Container>
  );
}

export default ProjectsPage;