import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: 'white' }}>
        <Toolbar variant="dense">
          <NavLink to="/">
            <img alt="tiktok" height="42" src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/images/logo-whole-c555aa707602e714ec956ac96e9db366.svg" />
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{
      height: '50px', width: '100%', backgroundColor: 'transperent', marginBottom: '30px',
    }}
    />
  </>
);

export default Navbar;
