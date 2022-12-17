import { Grid } from "@mui/material";
import React from "react";
// import {  Header, Layout, LeftBar } from "../../components";
import vector1 from '../../assets/images/vec1.png';
import vector2 from '../../assets/images/vector2.png';
import vector3 from '../../assets/images/vector3.png';
import FlashTokens from "./components/flashtokens";

import FlashMigration from "./components/FlashMigration";
import AmountCard from "./components/Amountcard";
import Layout from "../StackingDashboard/components/Layout";


const StackDashboard = () => {
  return (
    <Layout>
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <AmountCard img={vector2} label="Total Staked Amount" value="1229 Flash" />
        <AmountCard img={vector1} label="Total Stakers" value="100" />
        <AmountCard img={vector3} label="Total Reward Distributed" value="120 BUSD" />
      </Grid>
      <Grid container sx={{ marginTop: "20px", marginBottom: "30px" }} spacing={2}>
        <FlashTokens />
        <FlashMigration />
        {/* <LockPeriod /> */}
      </Grid>
      {/* <Grid container sx={{ marginTop: "20px" }}> */}
      {/* <Amount /> */}
      {/* </Grid> */}
      <br className='mo-show-only' />
      <br className='mo-show-only' />
    </Layout>
  );
};

export default StackDashboard;
