import Container from "../components/container";

interface Custom404Props {
  defKey?: string[] | string;
  title?: string;
  message?: string;
}

const Custom404 = (props: Custom404Props): JSX.Element => (
  <Container defKey={props.defKey}>
    <h1>404 - {props.title || "Page Not Found"}</h1>
    <p>{props.message}</p>
  </Container>
);

export default Custom404;
