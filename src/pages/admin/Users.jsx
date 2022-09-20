import { useEffect, useState } from "react";
import axios from "axios";
import { UserTable } from "../../components";
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function Users() {
  const [errors, setErrors] = useState();
  errors && console.error(errors);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${apiURI}/auth/users`)
      .then((response) => {
        setData(response.data);
      })

      .catch((response) => {
        console.log("error in axios form call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  }, []);

  return <UserTable data={data} />;
}
