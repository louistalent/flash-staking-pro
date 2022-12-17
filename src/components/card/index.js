import { Grid, Box } from "@mui/material";
import React from "react";

const index = ({ label, value }) => {
  return (
    <Grid item xs={12} lg={3}>
      <Box
        sx={{
          height: "120px",
          background:
            "linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
          border: "1px solid rgba(251, 191, 4, 0.2)",
          backdropFilter: "blue(100px)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          paddingLeft: "20px",
        }}
      >
        
        <p className="mb-2 text-white small">{label}</p>
        <h3 className="text-white fw-bold">{value}</h3>
      </Box>
    </Grid>
  );
};

export default index;
