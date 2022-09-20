import axios from "axios";
import { useEffect, useState } from "react";
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function useUserByEmail(email) {
  const [userData, setUserData] = useState();
  const [errors, setErrors] = useState();
  errors && console.error(errors);

  useEffect(() => {
    axios
      .get(`${apiURI}/auth/${email}`)
      .then((response) => {
        setUserData(response.data);
      })

      .catch((response) => {
        console.log("error in axios form call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  }, [email]);

  return userData;
}
