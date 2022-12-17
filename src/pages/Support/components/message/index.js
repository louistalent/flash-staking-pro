import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import userimg from "../../../../assets/images/Ellipse 1.png";
import User from "../commonuser";
import Chatlist from "../../components/chatlist";
// import imgLogo from "../../../../assets/images/logo.png";
// import imgStaking from '../../assets/images/staking.png';
// import imgUser from '../../../../assets/images/user.png';
// import imBell from '../../assets/images/bell.png';
// import imgEnvelope from '../../assets/images/envelope.png';
// import "../chatlist/"
import styles from "../../components/style.module.css";

const index = ({ img, customer }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: `${customer ? 'row' : 'row-reverse'}`,
        justifyContent: `${customer ? 'start' : 'end'}`,
        alignItems: "center",
      }}
    >
      <img className={styles.userProfile} src={img} alt="" />
      <Box className={styles.usermessgae}>
        <Typography className={styles.username}>
          Yeah sure how can i help you?
        </Typography>
      </Box>
    </Box>
  );
};

export default index;
