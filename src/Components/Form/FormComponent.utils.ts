import * as yup from "yup";
import { EMAIL_REGEX, PHONE_REGEX } from "../../constants/constants";

export const formValidations = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .max(190, "Email must not be longer than 190 characters")
    .matches(EMAIL_REGEX, "Email is invalid")
    .email("Email is invalid"),
  phone_number: yup
    .string()
    .required("Phone Number is required")
    .matches(PHONE_REGEX, "Phone Number is invalid"),
});
