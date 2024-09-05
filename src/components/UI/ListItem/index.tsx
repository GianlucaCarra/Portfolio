import { Container } from "./style";
import { IListItem } from "../../../types/ListItem";

function ListItem({ children }: IListItem) {
  return (
    <Container>
      <div className="line"></div>
      <div>{children}</div>
    </Container>
  );
}

export default ListItem;