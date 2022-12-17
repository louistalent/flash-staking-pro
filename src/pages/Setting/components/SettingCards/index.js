import { Grid, Box } from "@mui/material";
import Switch, { SwitchProps } from '@mui/material/Switch';
import React from "react";
import style from "./style.module.css";
import { styled } from '@mui/material/styles';

const IOSSwitch = styled((props) => (
	<Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		color: '#656055',
		transitionDuration: '300ms',
		'&.Mui-checked': {
			color: '#FBBF04',

			transform: 'translateX(16px)',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.mode === 'dark' ? '#322F27' : '#322F27',
				opacity: 1,
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				opacity: 0.5,
			},
		},
		'&.Mui-focusVisible .MuiSwitch-thumb': {
			color: '#33cf4d',
		},
		'&.Mui-disabled .MuiSwitch-thumb': {
			// color:
			// 	theme.palette.mode === 'light'
			// 		? theme.palette.grey[100]
			// 		: theme.palette.grey[600],
			background: 'red',
			border: '1px solid #444139',

		},
		'&.Mui-disabled + .MuiSwitch-track': {
			opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
			background: 'red',


		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,

	},
	'& .MuiSwitch-track': {
		borderRadius: 26 / 2,
		backgroundColor: theme.palette.mode === 'light' ? '#322F27' : '#322F27',
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 500,
		}),
		border: '1px solid #444139',

	},
}));

const SettingCards = ({ label, description }) => {
	return (
		<Grid item xs={12} lg={7}>
			<Box
				sx={{
					height: "85px",
					background: "#201D16",
					// border: "1px solid rgba(251, 191, 4, 0.2)",
					backdropFilter: "blue(100px)",
					borderRadius: "15px",
					flexWrap: "wrap",
					display: "flex",
					justifyContent: "space-between",
					textAlign: "center",
					flexDirection: "row",
					paddingLeft: "20px",
				}}
			>
				<Box
					sx={{
						display: "flex",

						justifyContent: "center",
						textAlign: "center",
						flexDirection: "column",
					}}
				>
					<p className={style.value}>{label}</p>
					<h4 className={style.desc}>{description}</h4>
				</Box>

				<Box mt={2}>
					<IOSSwitch sx={{ m: 1 }} defaultChecked />
					{/* <Switch
						// color:""

						labelPlacement="end"
						sx={{
							"& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
								backgroundColor: "#444139",
							},
							"& .MuiSwitch-switchBase.Mui-checked": {
								color: "#FBBF04",
								// '&:hover': {
								//   backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
							},
						}}
						{...label}
						defaultChecked
					/> */}

				</Box>
			</Box>
		</Grid>
	);
};

export default SettingCards;
