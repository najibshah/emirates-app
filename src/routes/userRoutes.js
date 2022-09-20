import { Route } from "react-router-dom";
import { UserView, FormSuccess } from "../pages";

export const userRoutes = (
  <>
    <Route path="/" element={<UserView />} />
    <Route path="/success" element={<FormSuccess />} />
  </>
);
