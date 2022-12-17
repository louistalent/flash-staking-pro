import React from "react";
import {
	Grid,
	Box,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from "@mui/material";

import styles from "./style.module.css";
import { Button } from "../../../components";

const Amount = () => {
	return (
		<Grid
			lg={7}
			xs={12}
			className={styles.amount_grid_container}
		>
			<div className={styles.amountContainer}>
				<Box display="flex" gap={'20px'} mb="20px" flexDirection={{ xs: "column", md: "row" }}>
					<Box sx={{ flex: 1, padding: "" }}>
						<h5 className="text-white">Amount to Stake</h5>
						<FormControl fullWidth sx={{ marginTop: "10px" }}>
							{/* <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Select Amount
              </InputLabel> */}
							<Select
								value="Staked"
								disableUnderline
								variant="standard"
								sx={{
									padding: "10px 15px",
									fontSize: "18px",
									fontWight: 500,
									width: "100%",

									borderRadius: "10px",
									color: "#F2FFE1",
									background:
										"linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
									border: "1px solid rgba(255, 255, 255, 0.2)",
									".MuiSelect-icon": {
										color: "white",
									},
								}}
							>
								<MenuItem value="Staked"> Select Amount</MenuItem>
								<MenuItem value={10}>Tennn</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							{/* <Select
                sx={{
                  borderColor: "white",
                  ".MuiSelect-icon": {
                    color: "white",
                  },
                  ".MuiSelect-outlined": {
                    color: "white",
                  },
                  ".MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Amount"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select> */}
						</FormControl>
					</Box>
					<Box sx={{ flex: 1, padding: "" }}>
						<h5 className="text-white">Bonus Lock Options</h5>
						<FormControl fullWidth sx={{ marginTop: "10px" }}>
							{/* <InputLabel id="demo-simple-select-label" sx={{ color: "white" }}>
                Select Lock
              </InputLabel> */}
							<Select
								value="Staked"
								disableUnderline
								fullWidth
								variant="standard"
								sx={{
									padding: "10px 15px ",
									fontSize: "18px",
									width: "100%",
									fontWight: 500,
									borderRadius: "10px",
									color: "#F2FFE1",
									background:
										"linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
									border: "1px solid rgba(255, 255, 255, 0.2)",

									".MuiSelect-icon": {
										color: "white",
									},
								}}
							>
								<MenuItem value="Staked"> Select Lock</MenuItem>
								<MenuItem value={10}>Tennn</MenuItem>
								<MenuItem value={20}>Twenty</MenuItem>
								<MenuItem value={30}>Thirty</MenuItem>
							</Select>
							{/* <Select
                                // sx={{ color: 'white' }}
                                sx={{
                                    borderColor: 'white',
                                    '.MuiSelect-icon': {
                                        color: 'white'
                                    },
                                    ".MuiSelect-outlined": {
                                        color: 'white',
                                    },
                                    ".MuiOutlinedInput-notchedOutline": {
                                        borderColor: "white"
                                    }
                                }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Select Lock"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select> */}
						</FormControl>
					</Box>
				</Box>

				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<Button label="Claim Flash Token" />
					</Grid>
					<Grid item xs={12} md={6}>
						<Button label="Claim Flash Token" />
					</Grid>
					<Grid item xs={12} md={6} sx={{ marginX: "auto" }}>
						<Button label="Claim [Token of month]" />
					</Grid>
				</Grid>
				<Box sx={{ marginTop: "20px" }}>
					<Button label="Stake" bg="#FBBF04" color={'black'} />
				</Box>
			</div>
		</Grid>
	);
};

export default Amount;
