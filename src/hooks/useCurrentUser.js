import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

export function useCurrentUser() {
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
  return decoded;
}
