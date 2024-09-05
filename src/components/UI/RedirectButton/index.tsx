import { INavLinkProps } from "../../../types/NavLinkProps";
import { Container } from "./style";

function RedirectButton({ name, href, icon: Icon }: INavLinkProps) {
  return (
    <Container href={href} target="_blank" data-aos="fade-up">
      {Icon && <Icon />}
      {name}
    </Container>
  );
}

export default RedirectButton;