import { AppBar, Avatar, Toolbar, Typography } from '@mui/material';
import React, { Component } from 'react';

class AppHeaderBar extends Component {
    render() {
        return (
            <AppBar
        position="fixed"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
          <div>
            <Avatar alt='avatar' src='lms-frontend\src\assests\rishab.jpg '/>
          </div>
          </Typography>
          
        </Toolbar>
      </AppBar>
        );
    }
}

export default AppHeaderBar;