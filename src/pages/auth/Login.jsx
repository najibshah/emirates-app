import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/";

const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function LoginPage() {
  const history = useNavigate();

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginUser = {
      email: data.get("email"),
      password: data.get("password"),
    };
    axios
      .post(`${apiURI}/auth/login`, loginUser)
      .then((response) => {
        const { token } = response.data;
        // Set token to localstorage
        localStorage.setItem("jwtToken", token);
        dispatchEvent(new Event("storage"));
      })
      .then(() => history("/"))
      .catch((response) => {
        console.log("error in axios login call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  };

  return <LoginForm handleSubmit={handleSubmit} errors={errors} />;
}
