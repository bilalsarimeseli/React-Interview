import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { DatePicker } from '@material-ui/pickers'


export const Form = (props) => {
  return (
    <form onSubmit={() => { }}>
      <TextField
        id="name"
        name="name"
        label="Name"
        margin="normal"
        fullWidth

      />
      <DatePicker
        id="date"
        name="date"
        label="Date"
        margin="normal"
        fullWidth
      />

      <TextField
        id="active"
        name="active"
        label="Active"
        margin="normal"
        fullWidth
      />
      <TextField
        id="age"
        name="age"
        label="Age"
        margin="normal"
        fullWidth
      />

      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        margin="normal"
      >
        Submit
      </Button>
    </form>
  );
};
