import { useEffect, useState } from "react";
import axios from "axios";
import { UserTable } from ".";
import { useNavigate } from "react-router-dom";
const apiURI = process.env.REACT_APP_API_GATEWAY_URI;

export function Users() {
  const [errors, setErrors] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(`${apiURI}/auth/users`)
      .then((response) => {
        setData(response.data);
      })

      .catch((response) => {
        console.log("error in axios form call react");
        setErrors({});
        setErrors(response.response.data);
      });
    // eslint-disable-next-line no-console
  }, []);

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
          width: "98%",
          height: "100vh",
          background: "#253237",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 15px 0 15px",
        }}
      >
        <UserTable data={data} />{" "}
      </div>
    </div>
  );
}
