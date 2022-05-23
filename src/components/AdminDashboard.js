import React from "react";
import Grid from "@material-ui/core/Grid";
import AccountProfile from "./AccountProfile";
import Notifications from "./Notifications";
import PaymentSubscription from "./PaymentSubscription";
import CustomPlan from "./CustomPlan";
import FilterType from "./FilterType";


const AdminDashboard = () => {
    return (
        <>
            <div className="welcome-d admin-dash">
                <Grid container>
                    <Grid className="dash-wrap" item xs={12} md={6}>
                        <AccountProfile isAdmin/>
                        <Notifications isAdmin/>
                        <PaymentSubscription isAdmin/>
                    </Grid>
                    <Grid className="dash-wrap" item xs={12} md={6}>
                        <CustomPlan isAdmin/>
                        <CustomPlan isAdmin/>
                        <CustomPlan isAdmin/>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default AdminDashboard;