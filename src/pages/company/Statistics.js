import React from 'react';
import DashboardLineChart from "../../components/DashboardLineChart";
import MultipleLineChart from "../../components/MultipleLineChart";
import DashboardPieChart from "../../components/DashboardPieChart";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import "./statistics.scss"

const Statistics = () => {
    return (
      <>
            <Box style={{flexGrow: 1}}>
                <div className="dashboard">
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Typography className="chart-title" variant="h5" gutterBottom component="div" align="left">
                                Statistics on Clicks
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} className="dash-btn">
                            <Button variant="contained" color="primary" type="submit">Export Exel</Button>
                        </Grid>
                    </Grid>
                    <div className="dash-chart">
                        <Grid container spacing={2} className="chart-top">
                            <Grid item md={6} lg={4} className="chart-pie">
                                <DashboardPieChart/>
                                <div className="pie-button">
                                    <Button className="pie-btn" variant="contained" color="secondary" type="submit">sign up</Button>
                                    <Button className="pie-btn" variant="contained" color="primary" type="submit" style={{margin: "0 15px"}}>
                                        Statistics
                                    </Button>
                                    <Button className="pie-btn" variant="contained" color="primary" type="submit">
                                        Account
                                    </Button>
                                </div>
                            </Grid>
                            <Grid item md={6} lg={8} className="chart-line">
                                <DashboardLineChart/>
                            </Grid>
                        </Grid>
                        <Grid container className="chart-bottom">
                            <Grid item xs={12}>
                                <MultipleLineChart />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Box>
        </>
    );
};

export default Statistics;
