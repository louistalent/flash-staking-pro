import { Grid } from "@mui/material";
import React from "react";
import { Button, Header, Card, LeftBar } from "../../components";

// import LockPeriod from '././components/LockPeriod';
// import { Button } from "../../../../components";
//
// import Layout from "./components/Layout";

// import LockPeriod from "../home/components/LockPeriod";
import SettingButton from "./components/Buttons";

import InfoInputs from "./components/InfoInputs";
import ProfileImg from "./components/ProfileImage";
import SocialInput from "./components/socialconnection";
import Layout from "./components/Layout";

const Profile = () => {
    return (
        <Layout headername="hi">
            <Grid
                container
                spacing={2}
                sx={{ marginTop: "20px", borderTop: "1px solid #201D16" }}
            >
                <ProfileImg />
            </Grid>
            <Grid container sx={{ marginTop: "20px" }}></Grid>
            <Grid container sx={{ marginTop: "20px" }}>
                <InfoInputs />
            </Grid>
            <Grid container sx={{ marginTop: "20px", marginBottom: "30px" }}>
                <SocialInput />
            </Grid>
            <Grid
                container
                sx={{
                    marginBottom: "129px",
                }}
            >
                <SettingButton />
            </Grid>
            <br className='mo-show-only' />
            <br className='mo-show-only' />
        </Layout>
    );
};

export default Profile;
