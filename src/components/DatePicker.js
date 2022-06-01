import React, {useState} from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { makeStyles } from "@material-ui/core";


const useStyle = makeStyles((theme) => ({
  // noBorder: {
  //   border: "none",
  // },
  root: {
    border: '1px solid rgba(0, 0, 0, 0.42)',
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#fff',
    marginTop:'0',
    padding:'4px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: '#fff',
      border: '1px solid rgba(0, 0, 0, 0.87)',
    },
    '&$focused': {
      backgroundColor: '#fff',
      // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      border: '2px solid #007FFF',
    }
  },
  focused: {}
}));


export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const classes = useStyle();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className={classes.root}
        disableToolbar
        format="MM/dd/yyyy"
        margin="normal"
        id="date-picker-inline"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
}