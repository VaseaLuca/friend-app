import { RootState, removeFriend } from "features/friend";
import { Button, ButtonGroup, Col, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Title } from "shared/ui";

const tableHeader = ["Name", "Email", "Phone", "Twitter", "Actions"];

export const FriendListTable = () => {
  const { friendList } = useSelector((state: RootState) => state.friends);
  const dispatch = useDispatch();

  const handleRemoveFriend = (id: number) => () => dispatch(removeFriend(id));

  return (
    <Container>
      <Title title="Friend List" className="text-start mb-4" />
      
      <Table striped bordered hover responsive className="w-full text-base text-left table-auto text-nowrap">
        <thead className="bg-gray-700 bg-dark text-start">
          <tr>
            {tableHeader.map((item) => (
              <th key={item} className="px-5 py-3 bg-secondary border text-white text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="border text-xl">
          {/* //TODO: map over the firends list and display the content here */}
          {friendList.length > 0 ? (
            friendList.map(({ id, firstName, lastName, email, phoneNumber, twitter }) => (
              <tr key={id} className="align-middle border text-start">
                <td className="align-middle px-5 py-2">
                  <Link to={`/friends/${id}`}>{`${firstName} ${lastName}`}</Link>
                </td>

                <td className="align-middle px-5 py-2">{email}</td>

                <td className="align-middle px-5 py-2">{phoneNumber}</td>

                <td className="align-middle px-5 py-2">{twitter}</td>

                <td>
                  <ButtonGroup className="px-5 py-2">
                    <Link to={`/friends/${id}/edit`}>
                      <Button variant="warning">Edit</Button>
                    </Link>

                    <Button variant="danger" onClick={handleRemoveFriend(id)}>
                      Remove
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={tableHeader.length}>No Data</td>
            </tr>
          )}
        </tbody>
      </Table>

      <Col className="text-start mt-2">
        <Link to="/friends/new">
          <Button variant="dark">New Friend</Button>
        </Link>
      </Col>
    </Container>
  );
};
