import { useField } from "formik";
import { Form } from "react-bootstrap";

interface Props {
  name: string;
  type: string;
  placeholder: string;
}

export const Input = ({ name, ...props }: Props) => {
  const [field] = useField(name);

  return <Form.Control {...field} {...props} />;
};
