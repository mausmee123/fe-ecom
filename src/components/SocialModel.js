import React,{useState} from "react";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeLogo from "../assets/HomeLogo.jpg";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const postImages = [HomeLogo, HomeLogo, HomeLogo, HomeLogo, HomeLogo, HomeLogo];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    border: '0px',
    boxShadow: 24,
    outline: 0,
    borderRadius:20,
};

const SocialModel = () => {

    const [copied, setCopied] = useState(false);

    function copy() {
        const el = document.createElement("input");
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        setCopied(true);
    }

    return (
        <div className="social-model">
            <Box style={{...style, width: '90%', height: '70%'}}>
                <Card className="card-wrap">

                    <CardContent className="card-content">
                        <div className="card-top">
                        <span className="title">
                    <GroupOutlinedIcon className="s-icon" color="primary"/>
                            <Typography color="text.secondary" className="s-title" component="span">
                        Share links with friends / family and others about useful products or services
                    </Typography>
                    </span>
                            <Grid className="grid-img" container spacing={2}>
                                {
                                    postImages.map((item) => (
                                        <Grid className="post" xs={4} sm={2} md={2}>
                                            <div className="post-img">
                                                <img src={item} alt='vendorImage'/>
                                            </div>
                                            <Typography variant="caption" component="div" mb={1}>{!copied ? "Copy link" : "Copied!"}</Typography>
                                            <ContentCopyIcon onClick={copy} fontSize="large" color="primary"/>
                                        </Grid>
                                    ))}
                            </Grid>
                        </div>

                        <div className="card-bottom">
                            <span className="title">
                                <Typography color="text.secondary" variant="h5" className="c-title">
                                    Choose one or more platforms were will share the copied link/links.
                                </Typography>
                            </span>


                                <FormGroup aria-label="position">
                                    <Grid container spacing={2}>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Facebook"
                                        control={<Checkbox/>}
                                        label="Facebook"
                                        labelPlacement="top"
                                        style={{color:'#007FFF'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Instagram"
                                        control={<Checkbox/>}
                                        label="Instagram"
                                        labelPlacement="top"
                                        style={{color:'#f32fff'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Youtube"
                                        control={<Checkbox/>}
                                        label="Youtube"
                                        labelPlacement="top"
                                        style={{color:'#C32525'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Tiktok"
                                        control={<Checkbox/>}
                                        label="Tiktok"
                                        labelPlacement="top"
                                        style={{color:'#000'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Twitter"
                                        control={<Checkbox/>}
                                        label="Twitter"
                                        labelPlacement="top"
                                        style={{color:'#11e2ff'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Email"
                                        control={<Checkbox/>}
                                        label="Email"
                                        labelPlacement="top"
                                        style={{color:'#007FFF'}}
                                    />
                                    </Grid>
                                    <Grid className="post" item>
                                    <FormControlLabel
                                        value="Other"
                                        control={<Checkbox/>}
                                        label="Other"
                                        labelPlacement="top"
                                        style={{color:'#434444'}}
                                    />
                                    </Grid>
                                    </Grid>
                                </FormGroup>


                            <Button variant="contained" className="primary-btn" color="primary" style={{fontSize: 20, padding: '.3rem 5rem', mt: 3}}>Close</Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default SocialModel;