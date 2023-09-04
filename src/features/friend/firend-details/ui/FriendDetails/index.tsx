import { useMemo } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "features/friend";
import { FriendDetailsCard } from "../FriendDetailsCard";

export const FriendDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { friendList } = useSelector((state: RootState) => state.friends);
  
  const goBack = () => navigate(-1);

  const selectedFriend = useMemo(() => {
    const firendId = Number(id);

    return friendList.find((friend) => friend.id === firendId)
  },[id])

  return (
    <div className="text-start px-4 py-5 bg-light rounded">
      <FriendDetailsCard
        name={`${selectedFriend?.firstName} ${selectedFriend?.lastName}`}
        email={selectedFriend?.email}
        phone={selectedFriend?.phoneNumber}
        twitter={selectedFriend?.twitter}
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
