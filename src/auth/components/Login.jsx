import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { setAuthToken } from "..";

const theme = createTheme();
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function LoginPage() {
  const [token, setToken] = useState();
  const history = useNavigate();

  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const loginUser = {
      email: data.get("email"),
      password: data.get("password"),
    };
    axios
      .post(`${apiURI}/auth/login`, loginUser)
      .then((response) => {
        const { token } = response.data;
        // Set token to ls
        // ls only stores strings. u can convert json to string -> parse it back
        localStorage.setItem("jwtToken", token);
        dispatchEvent(new Event("storage"));
        // Set token to Auth header
        setToken(token);
        setAuthToken(token);
      })
      .then(() => history("/"))
      .catch((response) => {
        console.log("error in axios login call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={errors.email && true}
              helperText={errors.email !== "" ? errors.email : " "}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={errors.password && true}
              helperText={errors.password !== "" ? errors.password : " "}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
