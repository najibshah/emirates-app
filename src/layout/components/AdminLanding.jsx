import { ViewForms } from "../../admin";

export function AdminLanding() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "100vh",
          background: "#253237",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>All Forms</h1>
        <ViewForms />
      </div>
    </div>
  );
}
