import React from "react";
import CallIcon from '@mui/icons-material/Call';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import EmailIcon from '@material-ui/icons/Email';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import CardActions from "@material-ui/core/CardActions";
import Rating from '@material-ui/lab/Rating';
import './Style.scss'
import Grid from "@material-ui/core/Grid";
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const ContactUs = () =>{
    const [value, setValue] = React.useState();

    return(
        <div>
            <div className="Contact-desc">
                <div className="About-us">
                    <div className="About-head border-blue">
                        <ListItem style={{float: 'left', color:'dodgerblue',fontSize:"40px"}}>
                            <ListItemIcon style={{minWidth: '35px'}}>
                                <EmailIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText className="text-blue" style={{fontSize:"40px"}}>Contact us</ListItemText>
                        </ListItem>
                    </div>
                </div>
                <ListItem className="list" >
                    <CallIcon color="primary" style={{fontSize:"40px"}}/>
                    <ListItemText className="text text-blue" color="primary" primary="call us" secondary="+0 123 456 789" />
                </ListItem>
                <ListItem className="list">
                    <EmailIcon color="primary" style={{fontSize:"40px"}}/>
                    <ListItemText className="text text-blue" primary="send us" secondary="info@companyname.com" />
                </ListItem>
                <Card style={{ minWidth: 275 }} className="contact-card">
                    <CardContent className="contact-cnt">
                        <Input style={{width:'100%'}} placeholder="Subject" type="text" />
                    </CardContent>
                    <CardContent className="contact-cnt">
                        <p>
                            <textarea rows="32" cols="100" placeholder="type and send message" />
                        </p>
                    </CardContent>
                    <CardActions className="contact-action">
                        <label htmlFor="icon-button-file" className="card-input">
                            <Input accept="image/*" id="icon-button-file" type="file" />
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <SystemUpdateAltIcon  color="primary"/>
                                <span className="cn-ct">Upload File</span>
                            </IconButton>
                        </label>
                        <Button variant="contained" color="primary">Send</Button>
                    </CardActions>
                </Card>

                <Card style={{ minWidth: 275 }} className="rating">
                    <Grid container spacing={3}>
                        <Grid item md={6} xs={12}>
                            <ListItem>
                                <ListItemIcon>
                                    <ForumOutlinedIcon color="secondary" style={{fontSize:"50px"}}/>
                                </ListItemIcon>
                                <ListItemText primary="Feedback" color="secondary" className="feed-text" />
                            </ListItem>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <ListItem className="feed-txt">
                                <ListItemText primary="Rate us:" color="secondary" className="feed-text1"/>
                                <ListItemText secondary="Jan 9, 2014">
                                <Rating
                                    className="feed-text1"
                                    name="simple-controlled"
                                    value={value}
                                    color="secondary"
                                    onChange={(event, newValue) => {setValue(newValue);}}
                                />

                                </ListItemText>
                            </ListItem>

                        </Grid>
                    </Grid>
                </Card>
                <Card style={{ minWidth: 275 }} className="contact-card1 contact-card">
                    <CardContent className="contact-cnt">
                        <Input style={{width:'100%'}} placeholder="Feedback" type="text" />
                    </CardContent>
                    <CardContent className="contact-cnt">
                        <p>
                            <textarea rows="8" cols="100" placeholder="type feedback of any improvement or other feedback you would like to share. thank you for sharing" />
                        </p>
                    </CardContent>
                    <CardActions className="contact-action contact-action1">
                        <Button variant="contained" color="secondary">feedback</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}
export default ContactUs;