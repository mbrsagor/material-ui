import { AppBar, CssBaseline, Toolbar, Typography } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import React, { Component } from 'react';
import './style/style.scss';

class App extends Component {
  
  render() { 
    return (
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant="h6">Photo Albam</Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
 
export default App;
