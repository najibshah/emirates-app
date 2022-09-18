import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import jwt_decode from "jwt-decode";

const theme = createTheme();
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function SubmitForm() {
  const history = useNavigate();
  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem("jwtToken")
  );
  const [errors, setErrors] = useState({});
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  useEffect(() => {
    window.addEventListener("storage", () => {
      const token = localStorage.getItem("jwtToken");
      setCurrentToken(token);
    });
  }, []);

  if (currentToken) {
    var decoded = jwt_decode(currentToken);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const newForm = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      description: data.get("description"),
      gender: gender,
      maritalStatus: maritalStatus,
    };

    axios
      .post(`${apiURI}/form/new-form`, newForm)
      .then((response) => {
        console.log(response.data);
      })
      .then(() => history("/success"))
      .catch((response) => {
        console.log("error in axios form call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  };

  const handleChangeMarital = (event) => {
    setMaritalStatus(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Application Form
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {" "}
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  error={errors.firstName && true}
                  helperText={errors.firstName !== "" ? errors.firstName : " "}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  error={errors.lastName && true}
                  helperText={errors.lastName !== "" ? errors.lastName : " "}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Marital Status
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={maritalStatus}
                    label="Age"
                    onChange={handleChangeMarital}
                    error={errors.maritalStatus && true}
                  >
                    <MenuItem value="Single">Single</MenuItem>
                    <MenuItem value="Married">Married</MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.maritalStatus !== "" ? errors.maritalStatus : " "}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Age"
                    onChange={handleChangeGender}
                    error={errors.gender && true}
                  >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Prefer not specify">
                      Prefer not specify
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    {errors.gender !== "" ? errors.gender : " "}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="email"
                  error={errors.description && true}
                  helperText={
                    errors.description !== "" ? errors.description : " "
                  }
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
