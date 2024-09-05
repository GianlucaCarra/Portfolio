import AOS from 'aos';
import { Container } from "./style";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import NotFoundHome from '../../components/Sections/NotFoundHome';

function NotFound() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
    });
  }, []);
  
  return (
    <Container id="not-found">
      <NotFoundHome />
    </Container>
  );
}

export default NotFound;