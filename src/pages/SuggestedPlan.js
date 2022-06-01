import React from "react";
import Header from "../components/common/Header";
import Dividers from "../components/common/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CustomPlan from "../components/CustomPlan";
import PaymentMethod from "../components/PaymentMethod";
import "./Style.scss"

const SuggestedPlan = () => {
  return(
    <>
      <Header />
      <Dividers />
      <div className="main-content">
        <div className="suggest-plan">
          <Typography variant="h5" color="secondary">
            Suggested Plan
          </Typography>
          <div className="subtitle1">This div's text looks like that of a button.</div>
          <CustomPlan/>
        </div>
        <PaymentMethod/>
        <Button variant="contained" color="primary" className="custom-btn">Sign Up</Button>
      </div>
    </>
  );
};

export default SuggestedPlan;