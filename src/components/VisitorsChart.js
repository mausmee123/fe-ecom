import React from "react";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Typography from "@material-ui/core/Typography";
import HomeLogo from '../assets/HomeLogo.jpg';
import { Area, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const VisitorsChart = () => {

  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 100},
    {name: 'Page b', uv: 500, pv: 400, amt: 2200},
    {name: 'Page c', uv: 600, pv: 3400, amt: 1300},
    {name: 'Page d', uv: 200, pv: 4400, amt: 400},
    {name: 'Page e', uv: 700, pv: 1400, amt: 1500},
    {name: 'Page f', uv: 900, pv: 300, amt: 600}
  ];

  return(
    <>
      <Grid container sm={12} className="chart-desc">
        <Grid item  lg={5} md={3} sm={3} xs={6} className="img-item">
          <div className="post-img">
            <img src={HomeLogo} alt='vendorImage'/>
          </div>
        </Grid>
        <Grid item lg={7} xs={12} md={9} sm={9} className="chart-cont">
          <div className="line-chart">
            <div className="l-chart-desc">
              <Typography className="l-chart-point">
                <div className="c-icon">
                  <PersonAddIcon style={{fill: "#00D037"}}/>
                </div>
                <span>

                            <Typography variant="h4" className="font" style={{color: "#00D037"}}>12 586</Typography>
                            <Typography variant="h6" className="font" style={{color: "#00D037"}}>d-1: 12000</Typography>
                            <Typography variant="h6" className="font" style={{color: "#00D037"}}>(+586 +4,6%)</Typography>
                            </span>
              </Typography>
              <Typography className="l-chart-point">
                <PersonAddIcon style={{fill: "#007FFF"}}/>
                <span>
                            <Typography variant="h4" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                            <Typography variant="h6" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                            <Typography variant="h6" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
                            </span>
              </Typography>
              <Typography className="l-chart-point">
                <PersonAddIcon style={{fill: "#C32525"}}/>
                <span>
                            <Typography variant="h4" className="font" style={{color: "#C32525"}}>12 586</Typography>
                            <Typography variant="h6" className="font" style={{color: "#C32525"}}>d-1: 12000</Typography>
                            <Typography variant="h6" className="font" style={{color: "#C32525"}}>(+586 +4,6%)</Typography>
                            </span>
              </Typography>
            </div>
            <div className="l-chart">
              <LineChart width={380} height={180} data={data} className="chart-lh">
                <Line dataKey="uv" stroke="#0088FE"/>
                <Line  dataKey="pv" stroke="#00C49F"/>
                <Line  dataKey="amt" stroke="#FFBB28"/>
                <Legend verticalAlign='top'/>
                <Area dataKey="uv" stackId="1" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip />
              </LineChart>
            </div>
          </div>

          <div className="share-chart">

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#007FFF"}}>Facebook</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#f32fff"}}>Instagram</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#C32525"}}>Youtube</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#000"}}>Tiktok</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#11e2ff"}}>Twitter</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#007FFF"}}>Email</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

            <div className="v-social">
              <Typography variant="h6" className="font" style={{color: "#434444"}}>Other</Typography>
              <Typography className="sub-chart-desc">
                <Typography variant="h6" className="font" style={{color: "#007FFF"}}>12 586</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>d-1: 12000</Typography>
                <Typography variant="subtitle2" className="font" style={{color: "#007FFF"}}>(+586 +4,6%)</Typography>
              </Typography>
            </div>

          </div>

        </Grid>
      </Grid>

    </>
  );
};

export default VisitorsChart;