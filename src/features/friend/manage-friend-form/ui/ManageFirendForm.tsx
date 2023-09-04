import { Formik, Form as FormikForm, ErrorMessage } from "formik";
import { useMemo } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateUniqueId } from "shared/libs";
import { RootState, addFriend, editFriend, removeFriend } from "features/friend";
import { ManageFirendFormTypes } from "./types";
import { SignupSchema } from "./validationSchema";
import { Input, Title } from "shared/ui";

const initialValues: ManageFirendFormTypes = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  twitter: "",
};

interface Props {
  actionType: "edit" | "create";
}

export const ManageFriendForm = ({ actionType }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { friendList } = useSelector((state: RootState) => state.friends);
  const { id } = useParams();
  const friendId = Number(id);

  const goBack = () => navigate(-1);
  const onSubmit = (
    values: ManageFirendFormTypes,
    { resetForm }: { resetForm: (nextValues?: ManageFirendFormTypes) => void }
  ) => {
    if (actionType === "create") {
      dispatch(addFriend({ ...values, id: generateUniqueId() }));

      resetForm();

      navigate("/")
    }

    if (actionType === "edit") {
      dispatch(editFriend({ ...values, id: friendId }));

      navigate("/")
    }
  };

  const handleRemove = () => {
    dispatch(removeFriend(friendId));

    navigate('/')
  };

  const actions = useMemo(() => {
    if (actionType === "create") {
      return (
        <>
          <Col>
            <Button variant="dark" type="submit">
              Create Friend
            </Button>
          </Col>

          <Col>
            <Button variant="secondary" className="mt-2" onClick={goBack}>
              Back
            </Button>
          </Col>
        </>
      );
    }

    if (actionType === "edit") {
      return (
        <>
          <Col>
            <Button variant="dark" type="submit">
              Update Friend
            </Button>
          </Col>

          <Col className="mt-3">
            <Button variant="secondary" onClick={goBack}>
              Back
            </Button>

            {/* //TODO: not sure what show needs to do */}
            <Link to={`/friends/${id}`}>
              <Button variant="secondary" className="mx-2">
                Show
              </Button>
            </Link>

            {/* //TODO: not sure what show needs to do */}
            <Button variant="danger" onClick={handleRemove}>
              Remove
            </Button>
          </Col>
        </>
      );
    }
  }, [actionType]);

  const firendValues: ManageFirendFormTypes = useMemo(() => {
    if (typeof id !== undefined) {
      const foundFriend = friendList.find((fiernd) => fiernd.id === Number(id));

      return foundFriend || initialValues;
    }

    return initialValues;
  }, [id, friendList]);

  return (
    <Container>
      <Title title={id ? "Edit Friend" : "Add New Friend"} className="text-start mb-4" />

      <Formik initialValues={firendValues} onSubmit={onSubmit} validationSchema={SignupSchema}>
        <FormikForm className="mx-auto">
          <Col className="text-start text-danger">
            <Form.Group>
              <Input name="firstName" type="text" placeholder="First Name" />

              <ErrorMessage name="firstName" className="text-danger" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Input name="lastName" type="text" placeholder="Last Name" />

              <ErrorMessage name="lastName" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Input name="email" type="text" placeholder="Email" />

              <ErrorMessage name="email" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Input name="phoneNumber" type="text" placeholder="Phone" />

              <ErrorMessage name="phoneNumber" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Input name="twitter" type="text" placeholder="Twitter" />

              <ErrorMessage name="twitter" />
            </Form.Group>
          </Col>

          <Col className="text-start mt-3">{actions}</Col>
        </FormikForm>
      </Formik>
    </Container>
  );
};
