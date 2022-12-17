import { Grid, Box, Button, TextField } from "@mui/material";
import React from "react";
// import style from "./style.module.css";

import { AiOutlineSend } from "react-icons/ai"
import { useLocation } from "react-router-dom";
const ChatButton = ({ label, description }) => {
	const location = useLocation();

	return (
		<Grid item xs={12} lg={12} sx={{ padding: { xs: "5px 5px 0px 5px", sm: location.pathname === '/Chatboard' ? "20px 27px 0px 27px" : "20px 0px 0px 27px" } }} >
			<Box
				sx={{
					display: "flex",

					justifyContent: "space-between",
					alignItems: "center",
					margin: 'auto',
					// height: "85px",
					background: "#201D16",
					border: '1px solid rgba(255, 255, 255, 0.1)',
					backdropFilter: "blue(100px)",
					borderRadius: "15px",
					padding: '8px'
					// display: "flex",
					// justifyContent: { sm: "end", lg: "end", xs: "center" },
					// flexDirection: "row",
					// paddingLeft: "20px",
				}}
			>
				<TextField
					variant="standard"
					fullWidth
					placeholder="Type Something"
					InputProps={{
						disableUnderline: true,
						style: {
							color: "gray",
							padding: "5px"
						},
					}}
				/>
				<Button
					sx={{
						color: "#201D16",
						width: "115px",
						height: "45px",
						textTransform: "capitalize",
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
					<AiOutlineSend style={{
						marginRight: "5px"
					}} />
					Send
				</Button>
			</Box>
		</Grid>
	);
};

export default ChatButton;
