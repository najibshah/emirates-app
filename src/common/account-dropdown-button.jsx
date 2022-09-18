import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CssBaseline from "@mui/material/CssBaseline";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function AccountDropdownButton(props) {
  const history = useNavigate();
  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem("jwtToken")
  );
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialog, setDialog] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    <div>
      <CssBaseline />
      <Button
        sx={{ my: 2, mx: 1, color: "white", display: "flex" }}
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="success"
      >
        {props.title}
        <KeyboardArrowDownIcon />
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {decoded && decoded.role === "admin" ? (
          <MenuItem onClick={() => history("/")}>Admin</MenuItem>
        ) : null}
        <MenuItem
          onClick={() => {
            localStorage.removeItem("jwtToken");
            dispatchEvent(new Event("storage"));
          }}
        >
          Log Out
        </MenuItem>
      </Menu>
    </div>
  );
}
