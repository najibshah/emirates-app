import { useEffect, useState } from "react";
import axios from "axios";
import FormGrid from "../../components/FormGrid";
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function ViewForms() {
  const [errors, setErrors] = useState();
  errors && console.error(errors);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${apiURI}/form/forms`)
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

  return <FormGrid data={data} />;
}
