import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function MainLoading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
