import { Grid } from '@mui/material';
import React from 'react'
import { Card, Header, Layout, LeftBar } from '../../components';
import imgDemo from '../../assets/images/demo.png';
import LockPeriod from './components/LockPeriod';
import Staking from './components/Staking';
import Amount from './components/Amount';
import Token from './components/Token';

const Home = () => {
    return (
        <Layout name="headername">
            <Grid container spacing={2} sx={{ marginTop: '15px' }}>
                <Card label="Total Value Locked" value="$9,574,20.84" />
                <Card label="Profit " value="$456,569.02" />
                <Card label="APY Rate" value="97.23%" />
                <Card label="Stakers" value="6997" />
            </Grid>
            <Grid
                container sx={{ marginTop: '5px' }}
                spacing={2}>
                <LockPeriod />
                <Staking />
            </Grid>
            <Grid
                container
                sx={{ marginTop: '20px', marginBottom: '30px', gap: { sm: '17px', lg: '0px' }, flexDirection: { sm: 'column-reverse', lg: 'row' } }}
            >
                <Amount />
                <Token />
            </Grid>
            <br className='mo-show-only' />
            <br className='mo-show-only' />
        </Layout >
    )
}

export default Home;