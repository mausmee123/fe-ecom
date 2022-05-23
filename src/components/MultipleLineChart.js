import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import HomeLogo from '../assets/HomeLogo.jpg';
import { Line, LineChart, XAxis, YAxis} from "recharts";
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from "@material-ui/core/IconButton";



const MultipleLineChart = ({todo, onDelete}) => {

    const data = [
        {name: 'Page A', uv: 400, pv: 2400, amt: 100 , av: 800, bv: 500 , cv: 100},
        {name: 'Page b', uv: 500, pv: 400, amt: 200 , av: 500, bv: 100 , cv: 100},
        {name: 'Page c', uv: 600, pv: 3400, amt: 300 , av: 100, bv: 700 , cv: 400},
        {name: 'Page d', uv: 200, pv: 4400, amt: 400 , av: 300, bv: 600 , cv: 600},
        {name: 'Page e', uv: 700, pv: 1400, amt: 500 , av: 500, bv: 500 , cv: 200},
        {name: 'Page f', uv: 900, pv: 300, amt: 600 , av: 300, bv: 200 , cv: 600}
    ];

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={4} className="multi-chart">
                    <Grid container sm={12} md={6} lg={6} className="chart-desc">
                        <Grid item className="img-item">
                        <div className="post-img">
                            <img  width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        </Grid>
                        <Grid item xs={8} md={9} className="chart-cont">
                            <div className="line-chart">
                                <Typography className="l-chart-desc">
                                    <Typography variant="h4" className="font1"  style={{color: "#00D037"}}>12 586</Typography>
                                    <Typography variant="subtitle2" className="font"  style={{color: "#00D037"}}>d-1: 12000</Typography>
                                    <Typography variant="subtitle2" className="font"  style={{color: "#00D037"}}>(+586 +4,6%)</Typography>
                                </Typography>
                                <div className="l-chart">
                        <LineChart width={400} height={90} data={data}>
                            <Line dataKey="uv" stroke="#00D037"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} md={6} lg={6} className="chart-desc">
                        <Grid item className="img-item">
                        <div className="post-img">
                            <img  width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        </Grid>
                        <Grid item xs={8} md={9} className="chart-cont">
                            <div className="line-chart">
                            <Typography className="l-chart-desc">
                                <Typography variant="h4" className="font1" style={{color: "#FCB900"}}>12 586</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#FCB900"}}>d-1: 12000</Typography>
                                <Typography variant="subtitle2" className="font"  style={{color: "#FCB900"}}>(+586 +4,6%)</Typography>
                            </Typography>
                                <div className="l-chart">
                        <LineChart width={400} height={90} data={data} xs={9}>
                            <Line dataKey="pv" stroke="#FCB900"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} md={6} lg={6} className="chart-desc">
                        <Grid item className="img-item">
                        <div className="post-img">
                            <img  width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        </Grid>
                        <Grid item xs={8} md={9} className="chart-cont">
                            <div className="line-chart">
                            <Typography className="l-chart-desc">
                                <Typography variant="h4" className="font1" style={{color: "#007FFF"}}>12 586</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
                            </Typography>
                                <div className="l-chart">
                        <LineChart width={400} height={90} data={data}>
                            <Line dataKey="amt" stroke="#007FFF"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} md={6} lg={6} className="chart-desc">
                        <Grid item className="img-item">
                        <div className="post-img">
                            <img  width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        </Grid>
                        <Grid item xs={8} md={9} className="chart-cont">
                            <div className="line-chart">
                            <Typography className="l-chart-desc">
                                <Typography variant="h4" className="font1" style={{color: "#7000FF"}}>12 586</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#7000FF"}}>d-1: 12000</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#7000FF"}}>(+586 +4,6%)</Typography>
                            </Typography>
                                <div className="l-chart">
                        <LineChart width={400} height={90} data={data}>
                            <Line dataKey="av" stroke="#7000FF"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container sm={12} md={6} lg={6} className="chart-desc">
                        <Grid item className="img-item">
                        <div className="post-img">
                            <img  width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                        </Grid>
                        <Grid item xs={8} md={9} className="chart-cont">
                            <div className="line-chart">
                            <Typography className="l-chart-desc">
                                <Typography variant="h4" className="font1" style={{color: "#C32525"}}>12 586</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#C32525"}}>d-1: 12000</Typography>
                                <Typography variant="subtitle2" className="font" style={{color: "#C32525"}}>(+586 +4,6%)</Typography>
                            </Typography>
                                <div className="l-chart">
                        <LineChart width={400} height={90} data={data}>
                            <Line dataKey="bv" stroke="#C32525"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                        <Grid container sm={12} md={6} lg={6} className="chart-desc" style={{float:'right'}}>
                            <Grid item className="img-item">
                        <div className="post-img">
                            <img width={130} height={110} src={HomeLogo} alt='vendorImage'/>
                            <IconButton className="closes" component="span">
                                <CloseIcon />
                            </IconButton>
                        </div>
                            </Grid>
                            <Grid item xs={8} md={9} className="chart-cont">
                                <div className="line-chart">
                                <Typography className="l-chart-desc">
                                    <Typography variant="h4" className="font1"  style={{color: "#002060"}}>12 586</Typography>
                                    <Typography variant="subtitle2" className="font" style={{color: "#002060"}}>d-1: 12000</Typography>
                                    <Typography variant="subtitle2" className="font" style={{color: "#002060"}}>(+586 +4,6%)</Typography>
                                </Typography>
                                    <div className="l-chart">
                        <LineChart width={400} height={90} data={data}>
                            <Line dataKey="cv" stroke="#002060"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                        </LineChart>
                                    </div>
                                </div>
                            </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
export default MultipleLineChart;