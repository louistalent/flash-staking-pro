import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import userimg from "../../../../assets/images/Ellipse 1.png";
import styles from "../../components/style.module.css";
// import "../../components/"

const index = () => {
  return (
    // <Box className={styles.btncontainer}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <img className={styles.userProfile} src={userimg} alt="" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
        }}
      >
        <Typography className={styles.username}>Alesa Max</Typography>
        <Typography className={styles.worktitle}>Customer Support</Typography>
      </Box>
    </Box>
    // </Box>
  );
};

export default index;
