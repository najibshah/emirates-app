import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../../components";

const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function SignUp() {
  const history = useNavigate();

  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newUser = {
      userID: data.get("username"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
      password2: data.get("password2"),
    };

    axios
      .post(`${apiURI}/auth/register`, newUser)
      .then(() => history("/"))
      .catch((response) => {
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  };
  return <SignUpForm handleSubmit={handleSubmit} errors={errors} />;
}
