import { BrowserRouter, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "./layout";
import { adminRoutes, userRoutes, publicRoutes } from "./routes";
import { useCurrentUser } from "./hooks";

function App() {
  const decodedToken = useCurrentUser();

  // Protected Routes
  if (decodedToken) {
    var protectedRoutes =
      decodedToken.role.toString() === "admin" ? adminRoutes : userRoutes;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>{!protectedRoutes ? publicRoutes : protectedRoutes}</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
