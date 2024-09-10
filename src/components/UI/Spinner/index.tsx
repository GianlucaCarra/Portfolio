import { Container } from "./style";
import spinner from "../../../assets/spinner.svg";

function Spinner() {
  return (
    <Container>
      <div className="spinner">
        <img src={spinner} />
      </div>
    </Container>
  );
}

export default Spinner;