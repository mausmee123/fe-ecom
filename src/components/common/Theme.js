import React from 'react';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LogIn from '../../pages/LogIn';

const theme = createTheme({
    palette: {
        primary: {
            main: "#007FFF",
        },
        secondary: {
            main: "#00D037",
        },
        error: {
            main: "#C32525",
        },
    }
});

export default function Theme() {
    return <ThemeProvider theme={theme}></ThemeProvider>;
}
