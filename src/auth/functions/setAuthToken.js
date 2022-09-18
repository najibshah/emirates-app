import axios from "axios";

export function setAuthToken(token) {
  if (token) {
    //Apply to every request
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    // if token isnt there Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
}
