import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function EditUser() {
  const { email } = useParams();
  const history = useNavigate();

  const [errors, setErrors] = useState();
  const [data, setData] = useState();
  const [role, setRole] = useState("");
  useEffect(() => {
    axios
      .get(`${apiURI}/auth/${email}`)
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
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const editUser = {
      email,
      role,
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
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "100vh",
          background: "#253237",
        }}
      >
        {" "}
        <Grid
          container
          direction="column"
          alignItems="center"
          spacing={4}
          px={2}
        >
          <Grid item sm={12}>
            <h1>Edit priviliger for</h1>
          </Grid>
          <Grid item sm={12}>
            <h2>{email}</h2>
          </Grid>
          <Grid item sm={12}>
            <h2>{email}</h2>
          </Grid>
          <Grid item sm={12}>
            <FormControl fullWidth sx={{ minWidth: "270px" }}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={role}
                label="Role"
                onChange={handleChange}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sm={12}>
            <Button onClick={(e) => handleSubmit(e)} variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
