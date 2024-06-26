import React, { useState } from "react";
import Typography from "@mui/material/Typography";

function Clock() {
  setInterval(updateTime, 1000);

  const now = new Date().toLocaleTimeString();

  const [time, setTime] = useState(now);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div>
      <Typography
        variant="h1"
        sx={{ fontSize: 25, fontFamily: "monospace", color: "white" }}
      >
        {time}
      </Typography>
    </div>
  );
}

export default Clock;
