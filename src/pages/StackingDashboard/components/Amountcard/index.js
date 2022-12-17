import { Grid, Box } from "@mui/material";
import React from "react";

const index = ({ label, value, img }) => {
  return (
    //         <svg width="29" height="18" viewBox="0 0 29 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    // <path d="M14.0348 17.7514C14.1301 17.8028 14.2358 17.8312 14.3439 17.8348C14.4529 17.8371 14.5602 17.8082 14.6532 17.7514L28.3285 9.42741L28.3283 9.42765C28.5029 9.31607 28.6086 9.12327 28.6086 8.91612C28.6086 8.70921 28.5029 8.51618 28.3283 8.40483L14.653 0.0808023L14.6532 0.0810377C14.4611 -0.0270126 14.2266 -0.0270126 14.0348 0.0810377L0.35946 8.40507V8.40483C0.184795 8.51618 0.0791016 8.70921 0.0791016 8.91612C0.0791016 9.12327 0.184795 9.31607 0.35946 9.42765L14.0348 17.7514Z" fill="#FBBF04"/>
    // </svg>

    <Grid item xs={12} lg={4}>
      <Box
        sx={{
          height: "120px",
          background:
            "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
          border: "1px solid rgba(251, 191, 4, 0.2)",
          backdropFilter: "blue(100px)",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          // justifyContent: "center",
          flexDirection: "row",
          paddingLeft: "20px",
        }}
      >
        <img
          style={{
            border: "1px solid rgba(251, 191, 4, 0.2)",
            borderRadius: "15px",
            background:
              "linear-gradient(rgba(251, 191, 4, 0), rgba(251, 191, 4, 0.05), rgba(251, 191, 4, 0.2)",
            padding: "14px",
            width: "70px",
            height: "63px",
          }}
          src={img}
        />
        <Box ml={2}>
          <p className="mb-2 text-white small">{label}</p>
          <h3 className="text-white fw-bold">{value}</h3>
        </Box>
      </Box>
    </Grid>
  );
};

export default index;
