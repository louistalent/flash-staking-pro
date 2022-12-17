import {
  Grid,
  Box,
  Button,
  Switch,
  Typography,
  TextField,
  InputLabel,
} from "@mui/material";
// import { borderRadius } from "@mui/system";
import React from "react";
import Input from "../input";
// import style from "./style.module.css";
const InfoInputs = ({ label, description }) => {
  const inputdata = [
    {
      
      name: "Full Name",
      placeholder: "Enter full name",
    },
    {
      name: "Username",
      placeholder: "Enter full username",
    },
    {
      name: "Email Address",
      placeholder: "Enter full email",
    },
    {
      name: "Wallet Address",
      placeholder: "0x1fe9eea03d9d43616e4f8084fc38a91bd319207c",
    },
  ];
  return (
    <Grid >
      <Grid container   md={12}  xs={12}>
        {/* <Grid></Grid> */}
        {inputdata.map((i) => {
          return (
            <>
              <Input name={i.name} placeholder={i.placeholder} />
            </>
          );
        })}
        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default InfoInputs;
