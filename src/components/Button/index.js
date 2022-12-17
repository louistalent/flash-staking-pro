import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ label, bg, color, fontSize, border, height }) => {
  return (
    <Button
      fullWidth
      sx={{
        background: bg
          ? bg
          : "linear-gradient(180deg, rgba(161, 241, 55, 0.005) 0 %, rgba(161, 241, 55, 0.05) 100 %)",
        border: border ? border : "1px solid #FBBF04",
        fontSize: { fontSize },
        backdropFilter: "blur(100px)",
        borderRadius: "10px",
        color: color ? "black" : "white",
        fontWeight: "600",
        paddingY: "15px",
        ":hover": {
          opacity: 0.9,
          background: bg
            ? bg
            : "linear-gradient(180deg, rgba(161, 241, 55, 0.005) 0 %, rgba(161, 241, 55, 0.05) 100 %)",
        },
        height: height ? height : "54px"
      }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
