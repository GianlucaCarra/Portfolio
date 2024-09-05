import { Container } from "./style";
import { INavLinkProps } from "../../../types/NavLinkProps";

function NavLink({ name, href }: INavLinkProps) {
  return (
    <Container href={href}>
      {name}
    </Container>
  );
}

export default NavLink;