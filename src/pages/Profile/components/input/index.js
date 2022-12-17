import { Grid, Box, Button, TextField, InputLabel } from "@mui/material";
import React from "react";
// import ""
import style from "../style.module.css";
const Input = ({ name, placeholder, img }) => {
  return (
    <Grid item md={6} xs={12} sm={6}>
      <Box sx={{ padding: "10px 10px" }}>
        <InputLabel className={style.labeltext} htmlFor="bootstrap-input">
          {name}
        </InputLabel>
        <Box className={style.textcontainer}>
          <img src={img} />
          <TextField
            className={style.input}
            variant="standard"
            fullWidth
            placeholder={placeholder}
            InputProps={{
              disableUnderline: true,
              style: {
                color: "white",
              },
            }}
          />
        </Box>
      </Box>
    </Grid>
  );
};

export default Input;
