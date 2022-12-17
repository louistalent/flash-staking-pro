import styled from "@emotion/styled";
import { Grid, Box } from "@mui/material";
import React from "react";
import { Button } from "../../../../components";

import style from "./style.module.css";
const SettingButton = ({ label, description }) => {
  return (
    <Grid item xs={12} lg={12}>
      <Box
        sx={{
          height: "85px",

          backdropFilter: "blue(100px)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: { sm: "end", lg: "end", xs: "center" },
          flexDirection: "row",
        }}
      >
        <Grid item md={1.6} xs={6}>
          <Button label="Cancel" height="54px" border="none" bg="#201D16" />
        </Grid>
        <Grid item md={1.6} xs={6} marginLeft="20px">
          <Button label="Save" bg="#FBBF04" height="54px" color="black" />
        </Grid>
        {/* <p className={style.value}>{label}</p>
                <h4 className={style.desc}>{description}</h4> */}
        {/* <Button
          sx={{
            color: "#fff",
            width: "115px",
            height: "45px",
            borderRadius: "10px",
            backgroundColor: "#201D16",
            // padding: "18px 36px",
            fontFamily: "Inter",
            fontSize: "16px",
            marginRight:"20px",
            textTransform:"capitalize",
            fontWeight: "500",
            lineHeight: "16px",
            // letter-spacing: 0em.
            // text-align: left;

            textDecoration: "none",
          }}
        >
          Clean
        </Button> */}
        {/* <Button
          sx={{
            color: "#201D16",
            width: "115px",
            height: "45px",
            textTransform:"capitalize",
            borderRadius: "10px",
            backgroundColor: "#FBBF04",
            // padding: "18px 36px",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "16px",
            // letter-spacing: 0em.
            // text-align: left;

            textDecoration: "none",
          }}
        >
          Save
        </Button> */}
      </Box>
    </Grid>
  );
};

export default SettingButton;
