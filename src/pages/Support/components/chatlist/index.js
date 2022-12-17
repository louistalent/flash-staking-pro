import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import userimg from "../../../../assets/images/Ellipse 1.png";
import User from "../commonuser";
// import Supportheader from "../../../../components/Header2";
import Supportheader from "../../../../components/Header2"
import styles from "../../components/style.module.css";

const Chatlist = ({ }) => {
  const [supportBtnActive, setSupportBtnActive] = useState('all');
  return (
    <>
      <Grid item xs={12}>
        <Box
          sx={{
            height: "100vh",
            borderRight: {
              xs: "none",
              sm: "1px solid #201D16 !important",
              md: "1px solid #201D16 !important",
            },
          }}
        >
          <div className={styles.innerContainer}>
            <div className={styles.btncontainer}>
              <Button onClick={() => setSupportBtnActive('all')} className={`allbtn ${supportBtnActive === 'all' ? styles.support_btn_active : ''} `}>&nbsp;&nbsp;All&nbsp;&nbsp;</Button>
              <Button onClick={() => setSupportBtnActive('unread')} className={`unReadbtn ${supportBtnActive === 'unread' ? styles.support_btn_active : ''} `}>Unread</Button>
              {/* <Button className={styles.allbtn + ' ' + styles.support_btn_active}>&nbsp;&nbsp;All&nbsp;&nbsp;</Button>
              <Button className={styles.unReadbtn}>Unread</Button> */}
            </div>

            <Box className={styles.usercontainer}>
              <NavLink style={{ textDecoration: "none" }} to="/Chatboard">
                <User />
              </NavLink>
            </Box>

          </div>
        </Box>

      </Grid>
      <br className='mo-show-only' />
      <br className='mo-show-only' />
    </>
  );
};

export default Chatlist;
