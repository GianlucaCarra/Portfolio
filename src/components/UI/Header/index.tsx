import NavLink from "../NavLink";
import { Container, Navigation } from "./style";

function Header() {
  return (
    <Container>
      <Navigation>
        <NavLink name="HOME" href="/#home" />

        <NavLink name="ABOUT" href="/#about" />

        <NavLink name="PROJECTS" href="/projects" />

        <NavLink name="SKILLS" href="/skills"/>

        <NavLink name="CONTACT" href="/#contact" />
      </Navigation>
    </Container>
  );
}

export default Header;