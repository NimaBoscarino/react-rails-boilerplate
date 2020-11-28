import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const Calendar = ():React.ReactElement => {
  //what if as the defualt we just show today or most recent workout
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2020-11-25'),
  );

  const handleDateChange = (date: Date | null) => {
    console.log(date);
    setSelectedDate(date);
    //get api with date and user_id => all workouts for that user in that date
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
