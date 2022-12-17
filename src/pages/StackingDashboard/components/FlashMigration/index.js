import React from "react";
import { Box, Grid, IconButton, Typography, Input } from "@mui/material";
import { Button } from "../../../../components";

import { HiDotsHorizontal } from "react-icons/hi";
import styles from "../style.module.css";

// import imgLogo from "../../../assets/images/logo.png";
// import imgDollar from "../../../assets/images/dollar.png";
import CustomButton from "../../../../components/Button";

const index = () => {
  return (
    <Grid sx={{
      padding: { xs: '16px 0px 0px 16px' },
    }}
      lg={5}
      xs={12}
    >
      <Grid
        sx={{
          background:
            "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
          border: "1px solid rgba(251, 191, 4, 0.2)",
          backdropFilter: "blur(100px)",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography className={styles.Shaketext}>Flash Migration</Typography>

          <IconButton>
            <HiDotsHorizontal color="#FFFFFF" />
          </IconButton>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          <Typography mb={2} className={styles.durationtxt}>
            Need Approval before Migration
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "5px 10px",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #FFFFFF33",
              height: "64px",
              borderRadius: "10px",
            }}
          >
            <input className={styles.inputnumber} placeholder='' style={{ width: '100%' }} defaultValue={0} />
            {/* <Typography className={styles.inputnumber}>0</Typography> */}

            <Box>
              <Box className={styles.inputbtn} component="button">
                Max
              </Box>

              {/* <Button bg="red" border="none"/> */}
            </Box>
          </Box>
        </Box>

        <Grid container spacing={2} mt={16}>


          <Grid item xs={12} md={6}>
            <Button fontSize="12px" label="Approve" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button label="Migrate" bg="#FBBF04" color="red" />
          </Grid>
          {/* <CustomButton label="sa" /> */}
          {/* <CustomButton label="sa" /> */}
        </Grid>


        {/* </Box> */}
      </Grid>
    </Grid>
  );
};

export default index;
