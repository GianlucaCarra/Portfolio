import Header from "../../components/UI/Header";
import AOS from 'aos';
import { Container } from "./style";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Footer from "../../components/UI/Footer";
import SkillsHome from "../../components/Sections/SkillsHome";
import Skills from "../../components/Sections/Skills";

function SkillsPage() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
    });
  }, []);
  
  return (
    <Container>
      <Header />

      <SkillsHome />

      <Skills />
      
      <Footer />
    </Container>
  );
}

export default SkillsPage;