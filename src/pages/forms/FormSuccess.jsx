import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useNavigate } from "react-router-dom";

export function FormSuccess() {
  const history = useNavigate();
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item sx={{ pt: "15vh" }}>
          <h1>Form submitted succesfully</h1>
        </Grid>
        <Grid item>
          <h3>Emails have been sent to</h3>
          <h5>user: najeebwormail@gmail.com</h5>{" "}
          <h5>admin: madaviary@gmail.com</h5>
        </Grid>
        <Grid item>
          <h6>
            email server is currently non-operational.
            <br /> reason: mailgun account got suspended as i accidentally
            pushed config keys to git repo
          </h6>
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => history("/")}
          >
            Submit another form
          </Button>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
