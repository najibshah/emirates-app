import { ViewForms } from "../admin";

export function AdminView() {
  return (
    <div
      style={{
        background: "#253237",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>All Forms</h1>
      <ViewForms />
    </div>
  );
}
