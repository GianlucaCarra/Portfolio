import About from "../../components/Sections/About";
import Home from "../../components/Sections/Home";
import Header from "../../components/UI/Header";
import AOS from 'aos';
import { Container } from "./style";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import ShortProjects from "../../components/Sections/ShortProjects";
import ShortSkills from "../../components/Sections/ShortSkills";
import Contact from "../../components/Sections/Contact";
import Footer from "../../components/UI/Footer";

function StartPage() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
    });
  }, []);
  
  return (
    <Container>
      <Header />

      <Home />

      <About />

      <ShortProjects />

      <ShortSkills />

      <Contact />

      <Footer />
    </Container>
  );
}

export default StartPage;