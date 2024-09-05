import { Container } from "./style";
import { INavLinkProps } from "../../../types/NavLinkProps";

function ShowMore({ name, href }: INavLinkProps) {
  return (
    <Container href={href} data-aos="fade-up">
      {name}
    </Container>
  );
}

export default ShowMore;