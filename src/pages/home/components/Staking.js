import React from "react";
import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
} from "@mui/material";

import Chart from "react-apexcharts";

import styles from "./style.module.css";
const Staking = () => {
	const options = {
		chart: {
			toolbar: { show: false },
		},
		stroke: {
			curve: "smooth",
			colors: ["#FBBF04", "#FBBF04", "#FBBF04"],
		},
		markers: {
			size: 0,
			sizeOffset: 12,
			colors: '#FBBF04',
			strokeColors: '#FBBF04',
			strokeWidth: 12,
			strokeOpacity: 0.2,
			fillOpacity: 1,
			discrete: [],
			shape: "circle",
			radius: 2,
			offsetX: 0,
			offsetY: 0,
			showNullDataPoints: true,
			hover: {
				size: 7,
			}
		},

		tooltip: {
			custom: ({ series, seriesIndex, dataPointIndex, w }) => {
				return '<div class="chart-tooltip-container">' +
					'<span class="chart-tooltip-font-date">' + w.globals.categoryLabels[dataPointIndex] + '</span><br/>' +
					'<span class="chart-tooltip-font" >' + series[seriesIndex][dataPointIndex] + ' SVENT </span>' +
					'</div>'
			}
		},

		xaxis: {
			categories: ["Jun 16", "Jun 17", "Jun 18", "Jun 19", "Jun 20", "Jun 21"],
			labels: {
				style: {
					colors: "white",
					fontSize: '12px',
				}
			},
			tooltip: false
		},
		yaxis:
		{
			categories: [1, 2, 3, 4, 5, 6, 7, 8],
			labels: {
				style: {
					colors: "white"
				}
			},
		},


	};
	const series = [
		{
			data: [0, 300, 140, 500, 170, 120],
		},
	];
	return (
		<Grid item lg={7} xs={12}>
			<div className={styles.ps_container}>
				<Box
					display={"flex"}
					justifyContent="space-between"
					alignItems="center"
					flexDirection={{ xs: "row", lg: "row" }}
				>
					<Box sx={{ flex: 1 }}>
						<h4 className="text-white" style={{ fontSize: "20px", margin: '0px' }}>
							Staking
						</h4>
					</Box>
					<Box sx={{ flex: 1, width: "100%", display: "flex" }}>
						<Box sx={{ flex: 1 }}>
							<FormControl fullWidth sx={{}}>
								{/* <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  Staked
                </InputLabel> */}
								<Select
									value="Staked"
									disableUnderline
									variant="standard"
									sx={{
										padding: { xs: '3px 5px', sm: '5px 15px' },
										fontSize: { xs: '14px', sm: '18px' },
										fontWight: 500,
										borderRadius: "5px",
										color: "white",
										background:
											"linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
										border: "1px solid rgba(251, 191, 4, 0.2)",
										// border: " none  !important",
										// outline: "none !important",
										// borderColor: "white",
										".MuiSelect-icon": {
											color: "white",
										},
									}}
								>
									<MenuItem value="Staked">Staked</MenuItem>
									<MenuItem value={10}>Tennn</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ flex: 1, paddingLeft: "10px" }}>
							<FormControl fullWidth sx={{}}>
								{/* <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "white" }}
                >
                  Last Week
                </InputLabel> */}
								<Select
									value="Staked"
									disableUnderline
									variant="standard"
									sx={{
										padding: { xs: '3px 5px', sm: '5px 15px' },
										fontSize: { xs: '14px', sm: '18px' },
										fontWight: 500,
										borderRadius: "5px",
										color: "white",
										background:
											"linear-gradient(180deg, rgba(251, 191, 4, 0) 0%, rgba(251, 191, 4, 0.05) 100%)",
										border: "1px solid rgba(251, 191, 4, 0.2)",

										".MuiSelect-icon": {
											color: "white",
										},
									}}
								>
									<MenuItem value="Staked">Last Week</MenuItem>
									<MenuItem value={10}>Tennn</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Box>
				</Box>
				<Box sx={{ flex: 1 }} display="flex" alignContent={"center"} style={{ color: 'white', paddingTop: '15px' }} >
					<h4 className="text-white" style={{ fontSize: "20px" }}>
						46,568.23 &nbsp;
					</h4>
					<span className="" style={{ opacity: '0.5' }}>/ Svent Staked</span>
				</Box>

				<Box sx={{ marginTop: "0px" }}>
					<Chart
						options={options}
						series={series}
						type="line"
						width="100%"
						height="280px"
					/>
				</Box>
			</div>
			<br className="mo-show-only" />
		</Grid>
	);
};

export default Staking;
