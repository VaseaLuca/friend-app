import { Col, Container } from "react-bootstrap";

interface Props {
  name: string;
  email: string;
  phone: string;
  twitter: string;
  actions?: React.ReactElement;
}

export const FriendDetailsCard = ({name, email, phone, twitter, actions}: Props) => {
  return (
    <Container className="container">
      <Col>
        <h2>{name}</h2>
      </Col>

      <Col className="d-flex">
        <p className="me-2">{email}</p> |<p className="mx-2">{phone}</p> |<p className="ms-2">{twitter}</p>
      </Col>

      <hr />

      {actions && <Col>{actions}</Col>}
    </Container>
  );
}