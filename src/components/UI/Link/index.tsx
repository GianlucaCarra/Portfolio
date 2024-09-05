import { INavLinkProps } from "../../../types/NavLinkProps";
import { Container } from "./style";

function Link({ name, href }: INavLinkProps) {
  return (
    <Container href={href} target="_blank" data-aos="fade-up">
      <div className="dot"></div>

      <div className="text">
        <span>{name}</span>
      </div>
    </Container>
  );
}

export default Link;