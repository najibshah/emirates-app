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
        <Grid item>
          <h1>Form submitted succesfully</h1>
        </Grid>
        <Grid item>
          <h2>Emails have been sent to</h2>
        </Grid>
        <Grid item>
          <h3>user: najeebwormail@gmail.com</h3>
          <h3>admin: madaviary@gmail.com</h3>
        </Grid>
        <Grid item>
          <p>
            email server is currently non-operational.
            <br /> reason: i accidentally pushed config keys to git repo due to
            which my mailgun account got suspended
          </p>
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
