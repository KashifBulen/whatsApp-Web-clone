// LeftDrawer.js
import React from 'react';
import { DrawerContext } from "@/context/Drawercontext";

import { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const LeftDrawer = () => {
  const { isDrawerOpen, toggleDrawer } =  useContext(DrawerContext);


  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
      <Box style={{ width: '250px', padding: '16px'  }}>
          <Avatar src="user.jpg" alt="User Avatar" />
        <Typography variant="h6" style={{ marginTop: '8px' }}>
          Avatar
        </Typography>
          </Box>
    </Drawer>
  );
};

export default LeftDrawer;
