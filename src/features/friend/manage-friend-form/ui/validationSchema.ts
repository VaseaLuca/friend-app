import { object, string } from "yup";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const SignupSchema = object().shape({
  firstName: string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
  lastName: string().min(2, "Too Short!").max(70, "Too Long!").required("Required"),
  email: string().matches(emailRegExp, "Invalid email").required("Required"),
  phoneNumber: string().matches(phoneRegExp, "Phone number is not valid").required("Required"),
  twitter: string()
    .matches(/^@[\w\d_]{1,69}$/, "Invalid Twitter username, it should start with @")
    .required("Required"),
});
