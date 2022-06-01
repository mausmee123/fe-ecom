import React, {useState} from "react";
import Stack from "@mui/material/Stack";
import {styled} from "@mui/material";
import Switch from "@material-ui/core/Switch/Switch";
import Typography from "@material-ui/core/Typography";

const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 48,
    height: 26,
    padding: 0,
    display: 'flex',
    overflow: 'visible',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 25,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: '2px 10px 2px 2px',
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            padding: '2px 10px',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',

            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 22,
        height: 22,
        borderRadius: 16,
        transition: theme.transitions.create(['width'], {
            duration: 200,
        }),
    },
    '& .MuiSwitch-track': {
        borderRadius: 32 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        boxSizing: 'border-box',
    },
}));

const ToggleSwitch = (props) => {
    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(!toggle)
    };

    const { text } = props;
    //console.log(props);

    return(
        <Stack className="toggle-wrap" alignItems="center">
            <Typography className="toggle-text" color="text.secondary">{text}</Typography>
            <AntSwitch className="toggle-btn" checked={toggle} onClick={handleClick}/>
        </Stack>
    );
};

export default ToggleSwitch;