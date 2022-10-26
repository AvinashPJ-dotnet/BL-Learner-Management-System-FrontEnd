import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/material';

const drawerWidth = 240;


function AppDrawer(props) {
  const menuList=[{'name':'Dashboard','icon':DeveloperBoardIcon}, {'name':'Recruitment','icon':ZoomInIcon}, {'name':'Onboarding','icon':AssessmentIcon},
   {'name':'Requirement','icon':WifiTetheringErrorIcon},{'name':'Assignment','icon':SwapCallsIcon},{'name':'Settings','icon':SettingsIcon}];

   function handleSelectedMenu(name){
    console.log(name);
   }
   
  return (
    <Box sx={{display: 'flex', width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      <CssBaseline />
      <Drawer
        
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {menuList.map((text, index) => (
            
            <ListItem key={index} disablePadding >
              <ListItemButton onClick={handleSelectedMenu(text)} >
                <ListItemIcon>
                  {<text.icon/>}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
            
          ))}
        </List>
        {/* <Divider /> */}
        
      </Drawer>
      </Box>
      );
}

export default AppDrawer;