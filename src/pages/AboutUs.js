import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

const AboutUs = () =>{
    return(
        <div>

            <div className="About-us">
                <div className="About-head border-blue">
                    <ListItem style={{float: 'left', color:'dodgerblue',fontSize:"40px"}}>
                        <ListItemIcon style={{minWidth: '35px'}}>
                            <AccountCircleIcon color="primary"/>
                        </ListItemIcon>
                        <ListItemText className="text-blue" style={{fontSize:"40px"}}>About us</ListItemText>
                    </ListItem>
                </div>
                <div className="About-content">
                    <Toolbar className="About-title text-blue border-blue">
                        <Typography variant="h6" noWrap component="div" style={{margin:"0 auto"}}>
                            Picture Placeholder
                        </Typography>
                    </Toolbar>
                    <Toolbar className="About-desc">
                        <Typography variant="body2" className="About-p" gutterBottom>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                        </Typography>
                    </Toolbar>
                </div>
                <div className="About-content">
                    <Toolbar className="About-title text-blue border-blue">
                        <Typography variant="h6" noWrap component="div" style={{margin:"0 auto"}}>
                            Picture Placeholder
                        </Typography>
                    </Toolbar>
                    <Toolbar className="About-desc">
                        <Typography variant="body2" className="About-p" gutterBottom>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>

                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                                quasi quidem quibusdam.</p>
                        </Typography>
                    </Toolbar>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;