import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import imgLogo from "../../assets/images/logo.png";
// import imgStaking from "../../assets/images/staking.png";
// import imgUser from "../../assets/images/user.png";
// import imBell from "../../assets/images/bell.png";
// import imgEnvelope from "../../assets/images/envelope.png";

import styles from "./style.module.css";
import { Box, Button } from "@mui/material";
// import imgLogo from "../../assets/images/logo.png";
// import Stackdashboard from "../../assets/images/Stackdashboard.png";
// import imgUser from "../../assets/images/user.png";
// import imBell from "../../assets/images/bell.png";
// import imgEnvelope from "../../assets/images/envelope.png";
// import setting from "../../assets/images/setting.png";
// import { Tune } from "@mui/icons-material";

import { BsFillEnvelopeFill } from 'react-icons/bs';
import { MdSettings, MdPerson, MdInsertChart } from 'react-icons/md';
import { TiChartAreaOutline } from 'react-icons/ti';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import WebsiteIcon from "../../assets/images/website.svg";

const Index = ({ mobile }) => {
	const [value, setValue] = useState(true);
	// const [value2, setValue2] = useState(false);

	// const tougles = () => { 
	//   setValue(true);
	// };
	console.log(value);

	return (
		<Box className={styles.mainContainer}>
			<Box className={styles.innerContainer}>
				<Box className="text-center">
					<img src={imgLogo} alt="Flash Technology" />
					<p className="text-white mt-3 fw-bold">Flash Technologies</p>
				</Box>

				<Box className={styles.linkContainer}>
					<Box onClick={() => setValue(false)}>
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive ? styles.activeLink : styles.inActiveLink
							}
						>
							{value ? (
								<MdInsertChart className={styles.imgBar} />
							) : (
								// <img src={imgStaking} alt="Staking" className={styles.imgBar} />
								<MdInsertChart className={styles.imgBar} />
							)}

							{mobile > 600 ? "Dashboard" : ""}
							{/* {mobile > 300 ? "Staking" : ""} */}
						</NavLink>
					</Box>
					<NavLink
						to="/Staking"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inActiveLink
						}
					>
						<TiChartAreaOutline className={styles.imgBar} />
						{/* <img src={Stackdashboard} alt="Profile" className={styles.imgBar} /> */}
						{mobile > 600 ? "Staking" : ""}
					</NavLink>
					<NavLink
						onClick={() => setValue(false)}
						to="/Profile"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inActiveLink
						}
					>
						{value ? (
							// <img src={imgUser} alt="Profile" className={styles.imgBar} />
							<MdPerson className={styles.imgBar} />

						) : (
							<MdPerson className={styles.imgBar} />
							// <img src={imgStaking} alt="Staking" className={styles.imgBar} />
						)}
						{mobile > 600 ? "Profile" : ""}
					</NavLink>
					<NavLink
						to="/Setting"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inActiveLink
						}
					>
						<MdSettings className={styles.imgBar} />

						{/* <img src={setting} alt="Profile" className={styles.imgBar} /> */}
						{mobile > 600 ? "Setting" : ""}
					</NavLink>
					<NavLink
						to="/Support"
						className={({ isActive }) =>
							isActive ? styles.activeLink : styles.inActiveLink
						}
					>
						<BsFillEnvelopeFill className={styles.imgBar} />
						{/* <img src={imgEnvelope} alt="Support" className={styles.imgBar} /> */}
						{mobile > 600 ? "Support" : ""}
					</NavLink>
				</Box>
			</Box>
			<Box className={styles.LeftSocialIcons}>
				<a href="https://flash-technologies.org/" target="_blink">
					<img className="" width={'25px'} src={WebsiteIcon} alt='website' />
				</a>
				<a href="https://twitter.com/Flash_Techno_Of" target="_blink">
					<FaTwitter />
				</a>
				<a href="https://t.me/flashtokenenglish" target="_blink">
					<FaTelegramPlane />
				</a>
			</Box>
		</Box>
	);
};

export default Index;
