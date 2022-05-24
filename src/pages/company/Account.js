import React from 'react';
import Grid from "@material-ui/core/Grid";
import AccountProfile from "../../components/AccountProfile";
import PaymentSubscription from "../../components/PaymentSubscription";
import Notifications from "../../components/Notifications";
import "./Account.scss"

const Account = () => {
  return (
    <>
      <div className="welcome-d welcome-dash">
        <Grid container spacing={3}>
          <Grid container item xs={12} md={6}>
            <AccountProfile/>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid item xs={12}>
              <PaymentSubscription/>
            </Grid>
            <Grid item xs={12}>
              <Notifications/>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Account;
