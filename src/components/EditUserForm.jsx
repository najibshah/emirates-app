import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState } from "react";

export function EditUserForm({ email, handleSubmit, userData }) {
  const [role, setRole] = useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
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
            {userData && <h2>{userData.firstName}</h2>}
          </Grid>
          <Grid item sm={12}>
            <h2>{email}</h2>
          </Grid>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid item sm={12}>
              <FormControl fullWidth sx={{ minWidth: "270px" }}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="role"
                  name="role"
                  value={role}
                  label="Role"
                  onChange={handleChange}
                >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Button
              type="submit"
              // onClick={(e) => handleSubmit(e)}
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </Grid>
      </div>
    </div>
  );
}
