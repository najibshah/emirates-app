import { Route } from "react-router-dom";
import { AdminView, EditUser, Users } from "../pages";

export const adminRoutes = (
  <>
    <Route path="/" element={<AdminView />} />
    <Route path="/users" element={<Users />} />
    <Route path="/editRole/:email" element={<EditUser />} />
  </>
);
