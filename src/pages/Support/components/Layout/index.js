import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
import Header2 from "../../../../components/Header2";
import { LeftBar } from "../../../../components";
import Chatlist from "../chatlist";

const Layout = ({ children }) => {
  const [mobile, setMobile] = useState();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth);
    });
  });

  useEffect(() => {
    setMobile(window.innerWidth);
  }, []);

  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <LeftBar mobile={mobile} />

      <Box sx={{ width: "100%" }}>
        <Header2 mainHeading="Support" mobile={mobile} />
        <Box sx={{ paddingX: "30px", overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
