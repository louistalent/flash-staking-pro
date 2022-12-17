import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { NavLink } from "react-router-dom";
import styles from "../leftbar/style.module.css";

import imgLogo from "../../assets/images/logo.png";
import imgStaking from "../../assets/images/staking.png";
import imgUser from "../../assets/images/user.png";
import imBell from "../../assets/images/bell.png";
import imgEnvelope from "../../assets/images/envelope.png";
import setting from "../../assets/images/setting.png";
import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useNavigate } from "react-router-dom";
// import { LeftBar } from "..";
import { BiMenu } from "react-icons/bi";
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdSettings, MdPerson, MdInsertChart } from 'react-icons/md';
import { TiChartAreaOutline } from 'react-icons/ti';


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginRight: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-start",
}));

export default function MobileDrawer({ mobile }) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();


	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<IconButton
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
				sx={{ ...(open && { display: "none" }), color: "rgb(176, 41, 34)" }}
			>
				<BiMenu color="white" fontSize={30} />
				{/* <MenuIcon fontSize="large"  /> */}
			</IconButton>

			<DrawerHeader />

			<Drawer
				sx={{
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: "100%",

						backgroundColor: "#201d16",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<br className="mo-show-only" />
				<List sx={{ alignSelf: "center", width: '100%', padding: '5px 15px' }}>
					<Box className="text-center">
						<img src={imgLogo} alt="Flash Technology" />
						<p className="text-white mt-3 fw-bold">Flash Technologies</p>
						<hr className="text-white" />
					</Box>

					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.activeLinkHamburger : styles.inActiveLinkHamburger
						}
					>
						<MdInsertChart className={styles.imgBar} />
						Dashboard
					</NavLink>
					<NavLink
						to="/Staking"
						className={({ isActive }) =>
							isActive ? styles.activeLinkHamburger : styles.inActiveLinkHamburger
						}
					>
						<TiChartAreaOutline className={styles.imgBar} />
						Staking
					</NavLink>


					<NavLink
						to="/Profile"
						className={({ isActive }) =>
							isActive ? styles.activeLinkHamburger : styles.inActiveLinkHamburger
						}
					>
						<MdPerson className={styles.imgBar} />
						Profile
					</NavLink>
					<NavLink
						to="/Setting"
						className={({ isActive }) =>
							isActive ? styles.activeLinkHamburger : styles.inActiveLinkHamburger
						}
					>
						<MdSettings className={styles.imgBar} />
						{/* <img src={setting} alt="Profile" className={styles.imgBar} /> */}
						Setting
					</NavLink>
					<NavLink
						to="/Support"
						className={({ isActive }) =>
							isActive ? styles.activeLinkHamburger : styles.inActiveLinkHamburger
						}
					>
						<BsFillEnvelopeFill className={styles.imgBar} />
						Support
					</NavLink>
				</List>
				{/* <Divider /> */}
			</Drawer>
		</Box>
	);
}
