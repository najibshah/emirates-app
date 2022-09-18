import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { FormCard } from ".";
import { useNavigate } from "react-router-dom";
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function ViewForms() {
  const history = useNavigate();

  const [errors, setErrors] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${apiURI}/form/forms`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })

      .catch((response) => {
        console.log("error in axios form call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  }, []);

  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        px={2}
      >
        {data?.map((data) => {
          return (
            <Grid item sm={4}>
              <FormCard data={data} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
