import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserForm } from "../../components";

const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function SubmitForm() {
  const history = useNavigate();
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newForm = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      phone: data.get("phone"),
      description: data.get("description"),
      gender: data.get("gender"),
      maritalStatus: data.get("maritalStatus"),
    };

    axios
      .post(`${apiURI}/form/new-form`, newForm)
      .then(() => history("/success"))
      .catch((response) => {
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  };

  return <UserForm handleSubmit={handleSubmit} errors={errors} />;
}
