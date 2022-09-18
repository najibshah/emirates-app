import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp, LoginPage } from "./auth";
import { UserLanding, AdminLanding, ResponsiveAppBar } from "./layout";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";

function App() {
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
  if (decoded) {
    console.log(decoded);
    var userRoutes =
      decoded.role.toString() === "admin" ? (
        <Route path="/" element={<AdminLanding />} />
      ) : (
        <Route path="/" element={<UserLanding />} />
      );
  }
  var publicRoutes = (
    <>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LoginPage />} />
    </>
  );

  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          {!userRoutes && publicRoutes}
          {userRoutes && userRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
