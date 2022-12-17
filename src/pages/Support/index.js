import { Grid, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Header, LeftBar } from "../../components";
import imgDemo from "../../assets/images/demo.png";
// import LockPeriod from '././components/LockPeriod';

import Layout from "./components/Layout";
import Chatlist from "./components/chatlist";
import Chatboard from "./components/Chatboard";

const Support = () => {

	return (
		<Layout>
			<Box className="">
				<h2 className="mo-show-only" style={{ color: 'white' }}>Support</h2>
			</Box>
			<Grid
			>
				<Grid
					container
					// spacing={2}
					sx={{ marginTop: "20px", borderTop: { xs: "none", md: "1px solid #201D16" } }}
				>
					{/* <Grid > */}
					<Grid
						item
						xs={12}
						sx={{ display: { xs: "flex", md: "none", sm: "none" } }}
					>
						<Chatlist />
					</Grid>
				</Grid>


				<Grid sx={{ marginTop: "0px" }}>
					<Grid sx={{ display: { xs: "none", md: "flex", sm: "flex" } }}>
						<Chatboard />
					</Grid>
				</Grid>
			</Grid>
			<br className='mo-show-only' />
			<br className='mo-show-only' />
		</Layout>
	);
};

export default Support;
