import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EditUserForm } from "../../components";
import { useUserByEmail } from "../../hooks";

const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function EditUser() {
  const { email } = useParams();
  const history = useNavigate();
  //get user data
  const userData = useUserByEmail(email);

  const [errors, setErrors] = useState();
  errors && console.error(errors);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const editUser = {
      email,
      role: data.get("role"),
    };
    axios
      .post(`${apiURI}/auth/editUser`, editUser)
      .then(() => history("/users"))
      .catch((response) => {
        console.log("error in axios login call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  };
  return (
    <EditUserForm
      handleSubmit={handleSubmit}
      email={email}
      userData={userData}
    />
  );
}
