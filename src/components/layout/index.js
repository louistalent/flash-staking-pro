import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import { Header, LeftBar } from '..';
import userimg from "../../assets/images/Ellipse 1.png";

const Layout = ({ children }) => {

    const [mobile, setMobile] = useState();
    useEffect(() => {


        window.addEventListener("resize", () => {
            setMobile(window.innerWidth);
        })
    })

    useEffect(() => {
        setMobile(window.innerWidth);
    }, [])

    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <LeftBar mobile={mobile} />
            <Box sx={{ width: '100%' }}>
                <Header mobile={mobile} rightimg={userimg} userid="0x71C76......34Db76F" mainHeading="Staking" />
                <Box sx={{ paddingX: '30px', height: '90vh', overflowY: 'auto' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export default Layout