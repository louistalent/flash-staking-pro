import { Grid, Box, Button, Switch, Typography } from "@mui/material";
import React from "react";
import userimg from "../../../../assets/images/Ellipse 1.png"
import style from "./style.module.css";

const ProfileImg = ({ label, description }) => {
	return (
		<Grid item xs={12} lg={7}>
			<Typography className={style.profileText}>Profile image</Typography>
			<Grid item md={4}>
				<Box
					sx={{
						display: "flex",
						textAlign: "center",
						flexDirection: "row",
					}}
				>
					<Box>
						<img
							src={userimg}
							alt="image"
							className={style.profileimg}
						/>
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Button
							onClick={() => { document.getElementById('file_upload').click() }}
							sx={{
								color: "#FBBF04",
								// width: "115px",
								height: "45px",
								borderRadius: "10px",
								// backgroundColor: "#201D16",
								// padding: "18px 36px",
								fontFamily: "Inter",

								fontSize: "16px",
								// marginRight: "20px",
								textTransform: "capitalize",
								fontWeight: "500",
								lineHeight: "16px",
								border: "1px solid #FBBF04",
								// letter-spacing: 0em.
								// text-align: left;

								textDecoration: "none",
							}}
						>
							Upload&nbsp;Now
						</Button>
						<input id="file_upload" type={'file'} style={{ display: 'none' }} />
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};

export default ProfileImg;
