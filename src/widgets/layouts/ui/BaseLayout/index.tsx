import { Container } from "react-bootstrap";
import { Nav } from "widgets/header";

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Nav />

      <Container>{children}</Container>
    </>
  );
};
