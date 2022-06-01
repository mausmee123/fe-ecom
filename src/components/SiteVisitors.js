import React from "react";
import {Area, Legend, Line, LineChart, XAxis, YAxis} from "recharts";
import GroupIcon from '@mui/icons-material/Group';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const siteVisitors = () =>{

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 100 , av: 800, bv: 500 , cv: 100},
        {name: 'Page b', uv: 500, pv: 400, amt: 200 , av: 500, bv: 100 , cv: 100},
        {name: 'Page c', uv: 600, pv: 3400, amt: 300 , av: 100, bv: 700 , cv: 400},
        {name: 'Page d', uv: 200, pv: 4400, amt: 400 , av: 300, bv: 600 , cv: 600},
        {name: 'Page e', uv: 700, pv: 1400, amt: 500 , av: 500, bv: 500 , cv: 200},
        {name: 'Page f', uv: 900, pv: 300, amt: 600 , av: 300, bv: 200 , cv: 600}
    ];

    return(
        <div>
            <div className="site-visitors">
            <Typography className="chart-title" variant="h5" gutterBottom component="div" align="left">
                Site visitors |  Site Clicks
            </Typography>
            <Grid container spacing={2} className="site-chart-desc">
                <Grid item xs={12} sm={5} md={5} lg={4}>
                    <Typography className="l-chart-desc">
                        <div className="chart-icon">
                       <GroupIcon style={{fill: "#00D037"}}/>
                        </div>
                        <div className="icon-desc">
                    <Typography variant="h4" className="font"  style={{color: "#00D037"}}>12 586</Typography>
                    <Typography variant="h6" className="font"  style={{color: "#00D037"}}>d-1: 12000</Typography>
                    <Typography variant="h6" className="font"  style={{color: "#00D037"}}>(+586 +4,6%)</Typography>
                        </div>
                </Typography>
                    <Typography className="l-chart-desc">
                        <div className="chart-icon">
                            <TouchAppIcon style={{fill: "#0088FE"}}/>
                        </div>
                        <div className="icon-desc">
                        <Typography variant="h4" className="font"  style={{color: "#0088FE",fontSize:"30px"}}>12 586</Typography>
                        <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>d-1: 12000</Typography>
                        <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>(+586 +4,6%)</Typography>
                        </div>
                    </Typography>
                    <div className="site-btn">
                        <Button className="st-btn" variant="contained" color="secondary" type="submit">Daily</Button>
                        <Button className="st-btn" variant="contained" color="primary" type="submit">
                            Monthly
                        </Button>
                        <Button className="st-btn" variant="contained" color="primary" type="submit">
                            Yearly
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={7} lg={8}>
                    <div className="l-chart">
                        <LineChart width={550} height={300} data={data} className="chart-lh">
                            <Line dataKey="uv" stroke="#007FFF"/>
                            <Line  dataKey="pv" stroke="#00D037"/>
                            <Legend verticalAlign='top'/>
                            <Area dataKey="uv" stackId="1" />
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip />
                        </LineChart>
                    </div>
                </Grid>
            </Grid>

                <Typography className="chart-title" variant="h5" gutterBottom component="div" align="left">
                    Shared Links |  Redirect Links
                </Typography>
                <Grid container spacing={2} className="site-chart-desc">
                    <Grid item xs={12} sm={5} md={5} lg={4}>
                        <Typography className="l-chart-desc">
                            <div className="chart-icon">
                                <GroupIcon style={{fill: "#00D037"}}/>
                            </div>
                            <div className="icon-desc">
                                <Typography variant="h4" className="font"  style={{color: "#00D037"}}>12 586</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#00D037"}}>d-1: 12000</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#00D037"}}>(+586 +4,6%)</Typography>
                            </div>
                        </Typography>
                        <Typography className="l-chart-desc">
                            <div className="chart-icon">
                                <TouchAppIcon style={{fill: "#0088FE"}}/>
                            </div>
                            <div className="icon-desc">
                                <Typography variant="h4" className="font"  style={{color: "#0088FE",fontSize:"30px"}}>12 586</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>d-1: 12000</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>(+586 +4,6%)</Typography>
                            </div>
                        </Typography>
                        <div className="site-btn">
                            <Button className="st-btn" variant="contained" color="secondary" type="submit">Daily</Button>
                            <Button className="st-btn" variant="contained" color="primary" type="submit">
                                Monthly
                            </Button>
                            <Button className="st-btn" variant="contained" color="primary" type="submit">
                                Yearly
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} lg={8}>
                        <div className="l-chart">
                            <LineChart width={550} height={300} data={data} className="chart-lh">
                                <Line dataKey="amt" stroke="#007FFF"/>
                                <Line  dataKey="av" stroke="#00D037"/>
                                <Legend verticalAlign='top'/>
                                <Area dataKey="uv" stackId="1" />
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip />
                            </LineChart>
                        </div>
                    </Grid>
                </Grid>

                <Typography className="chart-title" variant="h5" gutterBottom component="div" align="left">
                    Active User Accounts |  New Accounts | Total User Accounts
                </Typography>
                <Grid container spacing={2} className="site-chart-desc">
                    <Grid item xs={12} sm={5} md={5} lg={4}>
                        <Typography className="l-chart-desc">
                            <div className="chart-icon">
                                <GroupIcon style={{fill: "#00D037"}}/>
                            </div>
                            <div className="icon-desc">
                                <Typography variant="h4" className="font"  style={{color: "#00D037"}}>12 586</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#00D037"}}>d-1: 12000</Typography>
                                <Typography variant="h6" className="font"  style={{color: "#00D037"}}>(+586 +4,6%)</Typography>
                            </div>
                        </Typography>
                        <Typography className="l-chart-desc">
                        <div className="chart-icon">
                            <TouchAppIcon style={{fill: "#0088FE"}}/>
                        </div>
                        <div className="icon-desc">
                            <Typography variant="h4" className="font"  style={{color: "#0088FE",fontSize:"30px"}}>12 586</Typography>
                            <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>d-1: 12000</Typography>
                            <Typography variant="h6" className="font"  style={{color: "#0088FE",fontSize:"14px"}}>(+586 +4,6%)</Typography>
                        </div>
                    </Typography>
                        <Typography className="l-chart-desc">
                            <div className="chart-icon">
                            <PersonAddIcon style={{fill: "#C32525"}}/>
                            </div>
                            <div className="icon-desc">
                            <Typography variant="h4" className="font" style={{color: "#C32525"}}>12 586</Typography>
                            <Typography variant="h6" className="font" style={{color: "#C32525"}}>d-1: 12000</Typography>
                            <Typography variant="h6" className="font" style={{color: "#C32525"}}>(+586 +4,6%)</Typography>
                            </div>
                        </Typography>
                        <div className="site-btn">
                            <Button className="st-btn" variant="contained" color="secondary" type="submit">Daily</Button>
                            <Button className="st-btn" variant="contained" color="primary" type="submit">Monthly</Button>
                            <Button className="st-btn" variant="contained" color="primary" type="submit">Yearly</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} md={7} lg={8}>
                        <div className="l-chart">
                            <LineChart width={550} height={300} data={data} className="chart-lh">
                                <Line dataKey="bv" stroke="#007FFF"/>
                                <Line  dataKey="cv" stroke="#00D037"/>
                                <Line  dataKey="amt" stroke="#C32525"/>
                                <Legend verticalAlign='top'/>
                                <Area dataKey="uv" stackId="1" />
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip />
                            </LineChart>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}

export default siteVisitors;