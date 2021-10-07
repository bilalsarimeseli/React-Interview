import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Form } from './Form1/form';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <div className="App">
      <Form />
        </div>
      </MuiPickersUtilsProvider>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;

