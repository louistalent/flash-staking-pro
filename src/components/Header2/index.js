import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
// import { AiFillCaretDown } from "react-icons/ai";
import userimg from "../../assets/images/Ellipse 1.png";
import useravatar from "../../assets/images/user_avatar.png";

import imgWallet from "../../assets/images/wallet.png";
import imgLogo from "../../assets/images/logo.png";
import dropdown from "../../assets/images/dropdown.png";
import styles from "./style.module.css";
import MobileDrawer from "../Drawer";

const Header = ({ mainHeading, mobile }) => {
	const [user, setUser] = useState(false);
	return (
		<Box className={styles.mainContainer} mt={2}>
			{mobile <= 768 ? (
				<Box
					sx={{
						display: { sm: "flex", lg: "none" },
						//  color: IconColor || "black",
					}}
				>
					<MobileDrawer />
				</Box>
			) : null}

			{mobile <= 768 ? <img src={imgLogo} alt="Flash Technology" /> : null}

			{mobile <= 768 ? (
				<Button sx={{ background: "#FBBF04", padding: '12px 6px 12px 12px', minWidth: '0px', borderRadius: '12px', display: 'flex', justifyContent: 'center' }}>
					<img src={imgWallet} className="me-1" style={{ width: '25px', margin: 'auto' }} alt="Wallet" />
				</Button>
			) : null}

			{mobile > 768 ? (
				<Box>
					<Typography className={styles.m_headerName}>{mainHeading}</Typography>
					{/* <h4 className="text-white">Staking</h4> */}
				</Box>
			) : null}

			{mobile > 768 ? (
				<Box
					sx={{ display: "flex", alignItems: "center" }}
					display={{ md: "none", lg: "flex" }}
				>
					{/* <Box className={styles.dropdown}>
          <img className={styles.userimg} src={userimg} />
          <Box ml={2}>
            <Typography className={styles.username}>John Smith</Typography>
            <Typography className={styles.id}>0x71C76......34Db76F</Typography>
          </Box>
            <AiFillCaretDown className={styles.drop} />
          
          </Box> */}

					<Box className={styles.dropdown}>
						<Box onClick={() => setUser(!user)} className={styles.usercontainer}>
							<Box padding={1} >
								{/* <Typography className={styles.username}>John Smith</Typography> */}
								<Typography className={styles.id}>
									0x71C76......34Db76F
								</Typography>
							</Box>
							<img className={styles.userimg} src={useravatar} />
							<img className={styles.drop} src={dropdown} />
						</Box>
						{
							user &&
							<Box className={styles.userDropdown}>
								Disconnect
							</Box>
						}

					</Box>
				</Box>
			) : null}
		</Box>

		// <Box className={styles.mainContainer} mt={2}>
		//   <Box>
		//     <h4 className="text-white">{HeaderName}</h4>
		//   </Box>
		//   <Box sx={{ display: "flex", alignItems: "center" }}>

		//     <Box className={styles.dropdown}>
		//       <img className={styles.userimg} src={userimg} />
		//       <Box ml={2}>
		//         <Typography className={styles.username}>John Smith</Typography>
		//         <Typography className={styles.id}>0x71C76......34Db76F</Typography>
		//       </Box>
		//       <AiFillCaretDown className={styles.drop} />
		//     </Box>
		//   </Box>
		// </Box>
	);
};

export default Header;
