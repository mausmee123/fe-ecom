import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import PaymentTab from "./PaymentTab";

const card = (
  <React.Fragment>
    <CardContent className="card-content" style={{ padding: 0 }}>
      <Typography className="heading-title bg-green">
        your custom plan
      </Typography>

      <PaymentTab/>

    </CardContent>
  </React.Fragment>
);

const PaymentMethod = () => {
  return (
    <div>
      <div className="suggest-plan">
        <div className="custom-plan">
          <Card variant="outlined" className="custom-wrap2">{card}</Card>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;