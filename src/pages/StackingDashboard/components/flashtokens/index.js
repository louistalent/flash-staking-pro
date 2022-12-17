import React from "react";
import {
  Box,
  FormControl,
  // Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Input
} from "@mui/material";

// import Chart from "react-apexcharts";
import { Button } from "../../../../components";
// import {} from "../components/"
import styles from "../style.module.css";
const index = () => {
  const options = {
    chart: {
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      colors: ["#FBBF04", "#FBBF04", "#FBBF04"],
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20"],
    },
  };
  const series = [
    {
      data: [30, 40, 25, 50, 49],
    },
  ];
  return (
    <Grid item lg={10} md={10} xs={12} sx={{ paddingRight: { xs: "0px", md: '10px', margin: 'auto' } }}>
      <Grid className={styles.ps_container}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", lg: "row" }}
        >
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography className={styles.Shaketext}>
              Stake your Flash Tokens
            </Typography>
          </Box>
        </Box>

        <Box sx={{ marginTop: "20px" }}>
          {/* <Grid className={styles.amountContainer}> */}
          <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
            <Box sx={{ flex: 1, padding: "10px" }}>
              <Typography className={styles.durationtxt}>
                Select Duration to Stake Flash
              </Typography>
            </Box>
          </Box>
          <br className="desktop-show-only" />
          <Grid container spacing={1}>
            <Grid item xs={12} md={4}>
              <Button fontSize="12px" label="90 Days - 10% Reward" border={'1px solid #FBBF04'} bg="linear-gradient(180deg, rgba(161, 241, 55, 0.005) 0%, rgba(161, 241, 55, 0.05) 100%)" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button fontSize="12px" label="180 Days - 25% Reward" border={'1px solid rgba(255, 255, 255, 0.2)'} bg="linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)" />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button fontSize="12px" label="365 Days - 50% Reward" border={'1px solid rgba(255, 255, 255, 0.2)'} bg="linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)" />
            </Grid>
            <Grid item md={12} mt={3}>
              <br className="desktop-show-only" />

              <Typography className={styles.durationtxt}>
                Amount to Stake Flash Token
              </Typography>

              {/* <h5 className="text-white">Select Duration to Stake Flash</h5> */}

              <Box sx={{ marginTop: "20px" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "5px 10px ",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "1px solid #FFFFFF33",
                    height: "64px",
                    borderRadius: "10px",
                  }}
                >
                  <input className={styles.inputnumber} placeholder="" style={{ width: '100%' }} defaultValue={0} />
                  {/* <Typography className={styles.inputnumber}>0</Typography> */}

                  <Box style={{ display: 'flex' }}>
                    <Box className={styles.inputbtn} component="button">
                      BALANCE
                    </Box>
                    <Box className={styles.inputbtn} component="button">
                      STAKED
                    </Box>

                    {/* <Button bg="red" border="none"/> */}
                  </Box>
                </Box>
              </Box>
              <br className="desktop-show-only" />
              <br className="desktop-show-only" />

            </Grid>
            <Grid item xs={12} md={6} mt={2}>
              <Button fontSize="12px" label="Unstake Now" />
            </Grid>
            <Grid item xs={12} md={6} mt={2} sx={{}}>
              <Button label="Stake" color={'black'} bg="#FBBF04" colors />
            </Grid>
          </Grid>

          {/* </Grid> */}
          {/* <Chart options={options} series={series} type="line" width="100%" height="280px" /> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default index;
