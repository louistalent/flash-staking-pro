import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import usermale from "../../../../assets/images/Ellipse 1.png";
import userfemale from "../../../../assets/images/Ellipse 2.png";
import User from "../commonuser";
import Chatlist from "../../components/chatlist";
import ChatButton from "../../components/Button";
import Message from "../../components/message";
import styles from "../../components/style.module.css";

const index = ({ mobile }) => {
  return (
    <Grid container>
      <Grid item md={3} sm={4} xs={12}>
        <Chatlist />
      </Grid>
    </Grid>
  );
};

export default index;
