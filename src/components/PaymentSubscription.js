import React from "react";
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";


const PaymentSubscription = (props) => {
    const { isAdmin } = props;

    return(
        <div className="card-comp">
            <Card variant="outlined" className="card-wrap">
                <CardContent className="card-content">
                    <Typography className="heading-title bg-blue" style={{ textAlign: "left" }}>
                        Payment & Subscription
                    </Typography>

                    <div className="card-inner">
                        <Grid container spacing={2} mt={0} >
                            <Grid item xs={12} md={6}>
                                <Typography variant="subtitle2" className="sub-title" color="text.secondary" component="div">
                                    Change Payment Method
                                </Typography>
                                
                                <Button className="p-icon border-green"><PaymentOutlinedIcon/></Button>
                                <Button className="p-icon border-green"><PaymentOutlinedIcon/></Button>
                                <Button className="p-icon border-green"><PaymentOutlinedIcon/></Button>
                                <Button className="p-icon border-green"><PaymentOutlinedIcon/></Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body2" color="text.secondary" className="sub-title" component="div" style={{ textAlign: "center", marginBottom: "20px" }}>
                                    Please note if you end suscription and want to re-open the account contact us at info@ourcompany.com
                                </Typography>
                                {isAdmin && <Button variant="contained" color="primary" className="termBtn">Upload Terms of service</Button> }
                                <Button variant="contained" className="subscription termBtn">End Subscription</Button>
                            </Grid>
                        </Grid>
                    </div>

                </CardContent>

            </Card>
        </div>
    );
};

export default PaymentSubscription;