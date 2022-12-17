import React, { useEffect, useState } from "react";

import { Box } from "@mui/material";
// import userimg from "../../../../assets/images/Ellipse 1.png";

import Header2 from "../../../../components/Header2";

// import ProfileHeader from "../Header"
import { LeftBar } from "../../../../components";
// import Settingheader from "../Header"

// import Staking from '../Staking';
// import { Header, LeftBar } from '../all';

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
        <Header2
          mainHeading="Profile Settings"
          mobile={mobile}

        //   mainHeading="Staking"
        />
        <Box sx={{ paddingX: "30px", height: "90vh", overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
