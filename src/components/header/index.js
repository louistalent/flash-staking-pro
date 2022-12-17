import React, { useEffect, useState } from "react";
import {
    Box,
    Button,

    Typography,
} from "@mui/material";

import imgWallet from "../../assets/images/wallet.png";
import imgLogo from "../../assets/images/logo.png";
import dropdown from "../../assets/images/dropdown.png";

import { BiMenu } from "react-icons/bi";

import styles from "./style.module.css";
import { LeftBar } from "..";
import { NavLink } from "react-router-dom";
import MobileDrawer from "../Drawer";
// import MobileDrawer from "../Drawer";

const Header = ({ mobile, rightimg, leftimg, userid2, userid, mainHeading }) => {
    //   const [moble, setMobile] = useState();
    const [user, setUser] = useState(false);

    //   useEffect(() => {
    //     window.addEventListener("resize", () => {
    //       setMobile(window.innerWidth);
    //     });
    //   });

    //   useEffect(() => {
    //     setMobile(window.innerWidth);
    //   }, []);

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
            ) : // {/* <Box
                //  {/* > */}
                // {/* <BiMenu color="white" fontSize={30} /> */}
                // {/* <MobileDrawer /> */}
                // {/* </Box> */}

                null}

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
                    <Button
                        sx={{
                            backgroundColor: "#FBBF04",
                            color: "black",
                            width: "187px",
                            fontSize: "16px",
                            borderRadius: "10px",
                            textTransform: "capitalize",
                            height: "50px",
                            fontWeight: 500,
                            ":hover": {
                                backgroundColor: "#FBBF04",
                            },
                        }}
                        startIcon={<img src={imgWallet} className="me-1" alt="Wallet" />}
                    >
                        Connect Wallet
                    </Button>
                    <Box className={styles.dropdown}>
                        <Box onClick={() => setUser(!user)} className={styles.usercontainer}>
                            <Box>
                                <Typography className={styles.id}>{userid}</Typography>
                            </Box>
                            <img className={styles.userimg} src={rightimg} />

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
    );
};

export default Header;
