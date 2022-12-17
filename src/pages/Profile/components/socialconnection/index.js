import {
	Grid,
	Box,
	Button,
	Switch,
	Typography,
	TextField,
	InputLabel,
} from "@mui/material";
import insta from "../../../../assets/images/insta.png";
import telegram from "../../../../assets/images/telegram.png";
import tweeter from "../../../../assets/images/tweeter.png";

// import { borderRadius } from "@mui/system";
import React from "react";
import Input from "../input";
import style from "../style.module.css";
const SocialInput = ({ label, description }) => {
	//  const a =
	const inputdata = [
		{
			img: telegram,
			name: "Social Connections",
			placeholder: `/ cryptinvestor`,
		},
		{

			img: tweeter,
			name: "Social Connections",
			placeholder: "/ cryptinvestor",
		},
		{

			img: insta,
			name: "Social Connections",
			placeholder: "/ cryptinvestor",
		},

	];
	return (
		<Grid container md={12}>
			<Grid item md={12}>
				<InputLabel className={style.socialLabel} htmlFor="bootstrap-input">
					Social Connections
				</InputLabel>
			</Grid>
			<Grid
				container
				md={12}
				sx={{
					backgroundColor: "#201D16",
					borderRadius: "15px",
					padding: '10px'
					// height: "200px",
				}}
			>

				{inputdata.map((i, index) => {
					return (
						<Grid key={index} item md={6} xs={12} sm={6}>
							<Box sx={{ padding: "10px 10px" }}>
								<Box className={style.textcontainer}>
									<img src={i.img} />
									<TextField
										className={style.input}
										variant="standard"
										fullWidth
										placeholder={i.placeholder}
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
				})}

			</Grid>
		</Grid>
	);
};

export default SocialInput;
