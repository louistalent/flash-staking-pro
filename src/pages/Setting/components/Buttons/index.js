import styled from "@emotion/styled";
import { Grid, Box, Button } from "@mui/material";
import React from "react";
import style from "./style.module.css";
const SettingButton = ({ label, description }) => {
	return (
		<Grid item xs={12} lg={7} >
			<Box
				sx={{
					height: "85px",
					// background: "#201D16",
					// border: "1px solid rgba(251, 191, 4, 0.2)",
					backdropFilter: "blue(100px)",
					borderRadius: "15px",
					display: "flex",
					width: '100%',
					justifyContent: { sm: "end", lg: "end", xs: "space-between" },
					flexDirection: "row",
					marginRight: '10px'
				}}
			>
				{/* <p className={style.value}>{label}</p>
                <h4 className={style.desc}>{description}</h4> */}
				<Button
					sx={{
						color: "#fff",
						width: { xs: '100%', sm: '115px' },
						height: "45px",
						borderRadius: "10px",
						backgroundColor: "#201D16",
						// padding: "18px 36px",
						fontFamily: "Inter",
						fontSize: "16px",
						marginRight: "20px",
						textTransform: "capitalize",
						fontWeight: "500",
						lineHeight: "16px",
						// letter-spacing: 0em.
						// text-align: left;
						textDecoration: "none",
					}}
				>
					Clean
				</Button>
				<Button
					sx={{
						color: "#201D16",
						width: { xs: '100%', sm: '115px' },
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
					Save
				</Button>
			</Box>
		</Grid>
	);
};

export default SettingButton;
