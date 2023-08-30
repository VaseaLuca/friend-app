import { Link, useNavigate, useParams } from "react-router-dom";
import { FriendDetailsCard } from "../FriendDetailsCard/FriendDetailsCard";
import { Button } from "react-bootstrap";

export const FriendDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const goBack = () => navigate(-1);

  return (
    <div className="text-start px-4 py-5 bg-light rounded">
      <FriendDetailsCard
        name="Blob"
        email="sgsf"
        phone="adsas"
        twitter="@asdas"
        actions={
          <>
            <Button variant="secondary" className="me-2" onClick={goBack}>
              Back
            </Button>

            <Link to={`/friends/${id}/edit`}>
              <Button variant="dark">Edit</Button>
            </Link>
          </>
        }
      />
    </div>
  );
};
