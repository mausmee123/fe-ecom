import React from 'react';
import { TextField, makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    // noBorder: {
    //   border: "none",
    // },
    root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff'
        },
        '&$focused': {
            backgroundColor: '#fff',
            // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main
        }
    },
    focused: {}
}));

export default function InputField(props) {
    const {
        id,
        label,
        type,
        styles,
        value,
        InputLabelProps,
        autocomplete,
        color,
        variant,
        required,
        handlechange,
        name,
        autofocus,
        validation={}
    } = props;
    const classes = useStyle();
    return (
        <>
            {/*<TextField className={styles}*/}
            {/*           required={required}*/}
            {/*           id={id}*/}
            {/*           label={label}*/}
            {/*           type={type}*/}
            {/*           value={value}*/}
            {/*           InputProps={{classes: {notchedOutline: classes.noBorder}}}*/}
            {/*           // InputProps={InputProps}*/}
            {/*           autoComplete={autocomplete}*/}
            {/*           variant={variant}*/}
            {/*           onChange={handlechange}*/}
            {/*           name={name}*/}
            {/*           color={color}*/}
            {/*           autoFocus={autofocus}*/}
            {/*           InputLabelProps={InputLabelProps}*/}

            {/*/>*/}
            <TextField
                className={styles}
                InputProps={{ classes, disableUnderline: true }}
                required={required}
                id={id}
                label={label}
                type={type}
                value={value}
                autoComplete={autocomplete}
                variant={variant}
                onChange={handlechange}
                name={name}
                color={color}
                autoFocus={autofocus}
                InputLabelProps={InputLabelProps}
                {...validation}
                style={{ display: "grid" , marginTop:"10px"}}
            />
        </>
    );
}
