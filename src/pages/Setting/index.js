import { Grid } from "@mui/material";
import React from "react";
import { Card, Header, LeftBar } from "../../components";
import imgDemo from "../../assets/images/demo.png";
// import LockPeriod from '././components/LockPeriod';

import Layout from "./components/Layout";
import LockPeriod from "../home/components/LockPeriod";
import SettingCards from "./components/SettingCards/index.js";
import SettingButton from "./components/Buttons";

const SetCard = [
	{
		label: "Profile Share",
		desc: "You can turn off your profile sharing",
	},
	{
		label: "Sale Notifications",
		desc: " You can turn off your profile sharing",
	},
	{
		label: "Profile Share",
		desc: "You can turn off your profile sharing",
	},
	{
		label: "Sale Notifications",
		desc: " You can turn off your profile sharing",
	},
	{
		label: "Profile Share",
		desc: "You can turn off your profile sharing",
	},
	{
		label: "Sale Notifications",
		desc: " You can turn off your profile sharing",
	},
	{
		label: "Sale Notifications",
		desc: " You can turn off your profile sharing",
	},
];
const Setting = () => {
	return (
		<Layout>
			<Grid
				container
				spacing={2}
				sx={{ marginTop: "20px", borderTop: "1px solid #201D16" }}
			>
				{SetCard.map((data) => {
					return (
						<>
							<SettingCards label={data.label} description={data.desc} />
						</>
						// </Grid>
					);
				})}


			</Grid>
			<Grid container sx={{ marginTop: "20px" }}>

				<SettingButton />
			</Grid>
			{/* <Grid container sx={{ marginTop: '20px', marginBottom: '50px' }} >
	  <Amount />
	  <Token />
	  </Grid> */}
			<br className='mo-show-only' />
			<br className='mo-show-only' />
		</Layout>
	);
};

export default Setting;
