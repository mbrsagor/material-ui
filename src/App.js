import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  
  render() { 
    return (
      <>
        <form noValidate>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      </>
    );
  }
}
 
export default App;
