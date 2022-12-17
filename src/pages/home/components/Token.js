import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';

import { HiDotsHorizontal } from 'react-icons/hi';

import imgLogo from '../../../assets/images/logo.png';
import imgDollar from '../../../assets/images/dollar.png';

const Token = () => {
    return (
        < Grid lg={5} xs={12} marginTop={{ lg: 0, xs: 3 }} sx={{
            background: "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
            border: "1px solid rgba(251, 191, 4, 0.2)",
            backdropFilter: "blur(100px)",
            borderRadius: "15px",
            padding: '20px',
        }}>
            <Box display="flex" justifyContent="space-between">
                <h4 className='text-white' style={{ fontSize: '20px' }}>Token Rate</h4>
                <IconButton>
                    <HiDotsHorizontal color='#FFFFFF' />
                </IconButton>
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <Box sx={{
                    background: "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(100px)",
                    borderRadius: "10px",
                    padding: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '10px'
                }}>
                    <Box sx={{
                        width: "60px",
                        height: '60px',
                        padding: '15px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={imgDollar} alt="dollar" width="30px" height="30px" />
                    </Box>
                    <Box sx={{ marginLeft: '15px' }}>
                        <p style={{ fontSize: '18px', fontWeight: "500" }} className="text-white mb-0">
                            BUSD <span style={{ opacity: 0.5, fontSize: '12px' }}> | Busd USD</span>
                        </p>
                        <p style={{ opacity: 0.7 }} className="text-white mb-0">
                            $1.000 USD
                        </p>
                    </Box>
                </Box>
                <Box sx={{
                    background: "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(100px)",
                    borderRadius: "10px",
                    padding: '15px',
                    alignItems: 'center',
                    display: 'flex',
                    marginBottom: '10px'
                }}>
                    <Box
                        sx={{
                            width: "60px",
                            height: '60px',
                            borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <img src={imgLogo} alt="dollar" width="30px" height="30px" />
                    </Box>
                    <Box sx={{ marginLeft: '15px' }}>
                        <p style={{ fontSize: '18px', fontWeight: "500" }} className="text-white mb-0">
                            Flash  <span style={{ opacity: 0.5, fontSize: '12px' }}> | Flash token</span>
                        </p>
                        <p style={{ opacity: 0.7 }} className="text-white mb-0">
                            $0.010 USD
                        </p>
                    </Box>
                </Box>
            </Box>

        </Grid >
    )
}

export default Token;