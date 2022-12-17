import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import styles from "../../components/style.module.css";

import usermale from "../../../../assets/images/Ellipse 1.png";
import userfemale from "../../../../assets/images/Ellipse 2.png";

import User from "../commonuser";
import Chatlist from "../../components/chatlist";
import ChatButton from "../../components/Button";

import Message from "../../components/message";
import styles from "../../components/style.module.css";
import MobileDrawer from "../../../../components/Drawer";
import alert from "../../../../assets/images/alert.png";
import { BiArrowBack } from "react-icons/bi";
import Supportheader from "../../../../components/Header2";
import { useNavigate, useLocation } from "react-router-dom";

const Chats = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [mobile, setMobile] = useState();

    useEffect(() => {
        window.addEventListener("resize", () => {
            setMobile(window.innerWidth);
        });
    });

    useEffect(() => {
        setMobile(window.innerWidth);
    }, []);
    useEffect(() => {
        console.log('location.pathname : ')
        console.log(location.pathname)
    }, [location])

    return (
        <>
            <Grid container>
                <Grid item md={3} sm={4} sx={{ display: { xs: "none", sm: "inline " } }}>
                    <Chatlist />
                </Grid>

                <Grid item md={9} sm={8} xs={12} sx={{ overflowY: 'auto' }}>
                    <Box sx={{ height: `${location.pathname === "/Chatboard" ? '86vh' : '71vh'}`, overflowY: 'auto' }}>
                        <Box
                            sx={{
                                display: { xs: "flex", md: "none", sm: "none" },
                                width: "100%",
                            }}
                        >
                            <Supportheader HeaderName="Support" mobile={mobile} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                padding: "8px 8px",
                                alignItems: "center",

                                borderBottom: "1px solid #201D16 !important",
                                // width:"400px",
                                background: { sm: "none", xs: "#201D16", md: "none" },
                                justifyContent: {
                                    sm: "space-between",
                                    xs: "center",
                                    md: "space-between",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    // justifyContent: { sm: "space-between", xs: "space-between" },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: { md: "none", xs: "flex" },
                                        alignItems: "center",
                                        justifyContent: { sm: "space-between", xs: "space-between" },
                                    }}
                                >
                                    <NavLink to="/Support">
                                        <BiArrowBack
                                            style={{
                                                marginRight: "10px",
                                                color: "white",
                                                fontSize: "20px",
                                            }}
                                        />
                                    </NavLink>
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "none", sm: "flex", md: "flex" },
                                        // justifyContent: { sm: "center", xs: "center" },
                                    }}
                                >
                                    <User />
                                </Box>
                                <Box
                                    sx={{
                                        display: { xs: "flex", sm: "none", md: "none" },
                                        flexDirection: "column",
                                        justifyContent: { xs: "center" },
                                        paddingX: { sm: "200px", xs: "80px" },
                                        height: "20px,",
                                    }}
                                >
                                    <Typography className={styles.username}>Alesa Max</Typography>
                                    <Typography className={styles.worktitle}>Designer</Typography>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: { sm: "flex", lg: "flex", xs: "flex" },
                                    justifyContent: "end",
                                }}
                            >
                                <img src={alert} alt="img" />
                            </Box>
                        </Box>

                        <Box sx={{ padding: { xs: '0px', sm: '0 20px' }, }}>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>



                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={false} img={userfemale} />
                            </Grid>
                            <Grid item md={12} p={1} pt={2}>
                                <Message customer={true} img={usermale} />
                            </Grid>
                        </Box>

                    </Box>
                    <Box sx={{ position: "sticky" }}>
                        <ChatButton />
                    </Box>
                </Grid>
            </Grid>
            <br className='mo-show-only' />
            <br className='mo-show-only' />
        </>
    );
};

export default Chats;
