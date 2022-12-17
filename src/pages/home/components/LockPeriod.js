import React from 'react';
import { Box, Grid } from '@mui/material';

import styles from './style.module.css';

const LockPeriod = () => {
    return (
        <Grid item lg={5} xs={12} sx={{ paddingRight: "0px" }}>
            <div className={styles.ps_container1}>
                <h4 className='text-white' style={{ fontSize: '20px' }}>Lock Period</h4>
                <div className={styles.innerBox}>
                    <p className='text-light text-center opacity-50 mb-0'>Sunday</p>
                    <p className='text-light text-center mb-0' > Sep 24, 2022</p>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: '30px'
                    }}>
                        <div className={styles.time}>
                            <h2>10</h2>
                            <p>Day</p>
                        </div>
                        <div className={styles.time}>
                            <h2>12</h2>
                            <p>Hour</p>
                        </div>
                        <div className={styles.time}>
                            <h2>20</h2>
                            <p>Mins</p>
                        </div>
                        <div className={styles.time}>
                            <h2>20</h2>
                            <p>Sec</p>
                        </div>
                    </Box>

                    <div className='my-4'>
                        <p className='text-white text-center'>
                            $20,000.00 BUSD
                        </p>
                    </div>


                </div>

            </div>
        </Grid>
    )
}

export default LockPeriod;