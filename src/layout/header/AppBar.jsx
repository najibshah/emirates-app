import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MobileAppBar from "./MobileAppBar";
import { AccountDropdownButton } from "../../components";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

export const ResponsiveAppBar = () => {
  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem("jwtToken")
  );
  useEffect(() => {
    window.addEventListener("storage", () => {
      const token = localStorage.getItem("jwtToken");
      setCurrentToken(token);
    });
  }, []);

  if (currentToken) {
    var decoded = jwt_decode(currentToken);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <AppBar position="static" color="primary">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              pl: 4,
              mx: 2,
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            Emi Assignment
          </Typography>
          <MobileAppBar />
          {decoded && (
            <Box
              sx={{
                px: 4,
                flexGrow: 1,
                display: { xs: "none", md: "none", lg: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <AccountDropdownButton
                title={"Options"}
                buttons={["Admin", "Log Out"]}
              />
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
