import React, { useState } from "react";
import './Statistics.scss'
import FilterType from "../../components/FilterType";
import Typography from "@material-ui/core/Typography";
import VisitorsChart from "../../components/VisitorsChart";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Switch from "@material-ui/core/Switch";
import SiteVisitors from "../../components/SiteVisitors";
import Button from "@material-ui/core/Button";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    '&$checked': {
      transform: 'translateX(12px)',
      color: theme.palette.common.white,
      '& + $track': {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);



const Statistics = () => {
  const [toggle, setToggle] = useState(true)

  const handleClick = () => {
    setToggle(!toggle)
  };

  return (
    <>


      <Typography className="toggle-text" color="text.secondary">Analytics show</Typography>
      <AntSwitch checked={toggle} className="switch toggle-btn"  onClick={handleClick} />

      {toggle &&
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
        <SiteVisitors/>
        </Grid>

        <Grid item xs={12} md={6}>

          <div className="btn-group">
            <Button variant="contained" color="primary" className="btn">Export-exel</Button>
          </div> <FilterType/>
          <div className="btn-group">
            <Button variant="contained" color="primary" className="btn"> Refresh</Button>
          </div>

          <VisitorsChart/>
          <VisitorsChart/>
          <VisitorsChart/>
          <VisitorsChart/>
          <VisitorsChart/>
          <VisitorsChart/>
        </Grid>
      </Grid>
      }

    </>
  );
};

export default Statistics;
