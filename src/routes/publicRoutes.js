import { Route } from "react-router-dom";
import { SignUp, LoginPage } from "../pages";

export const publicRoutes = (
  <>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/" element={<LoginPage />} />
  </>
);
