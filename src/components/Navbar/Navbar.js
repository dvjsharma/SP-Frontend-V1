import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const logoStyle = {
  width: '140px',
  height: 'auto',
  cursor: 'pointer',
};



function Navbar({ mode, toggleColorMode }) {
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(!!sessionStorage.getItem('token'));
  console.log(loggedIn , "here")
 

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setLoggedIn(false);
  };


  return (
    <div >
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          // bgcolor: 'transparent',
          backgroundImage: 'none',
          background: '#CEE5FD',
          mt: 0,
          pt:2,
          mb:0,
          width:1,
          // border:'solid 2px red',
          pb:2
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            variant="regular"
            sx={(theme) => ({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              borderRadius: '999px',
              bgcolor:
                theme.palette.mode === 'light'
                  ? 'rgba(255, 255, 255, 0.4)'
                  : 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(24px)',
              maxHeight: 40,
            //   border: '1px solid',
              borderColor: 'divider',
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                  : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
            })}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                ml: '-18px',
                px: 0,
                // border: 'solid , 2px ,black'
              }}
            >
              <img
                src={
                  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg'
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href='user-profile'
                    //   target="_blank"
                      sx={{ width: '100%' , marginRight: '6%' }}
                    >
                      Profile
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href='user-profile'
                    //   target="_blank"
                      sx={{ width: '100%' ,   marginRight: '6%' }}
                    >
                      Create
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href='user-profile'
                    //   target="_blank"
                      sx={{ width: '100%'  , marginRight: '6%' }}
                    >
                      Vote
                    </Button>
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href='user-profile'
                    //   target="_blank"
                      sx={{ width: '100%'  , marginRight: '6%' , paddingLeft:'16%' , paddingRight:'16%' }}
                    >
                      Dashboard
                    </Button>
               
              </Box>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 0.5,
                alignItems: 'center',
                // border:'solid 20px red'
              }}
            >
              <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />

              {loggedIn ? (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={handleLogout}
                >
                 Logout
                </Button>
              ) : (<>
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/creator-login"
                >
                  Sign in
                </Button>
                <Button
                      color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/creator-signup"
                    >
                      Sign up
                    </Button>
                </>
              )}
              
                 
                   
              
            </Box>
            <Box sx={{ display: { sm: '', md: 'none' } }}>
              <Button
                variant="text"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: '30px', p: '4px' }}
              >
                <MenuIcon />
              </Button>
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    minWidth: '60dvw',
                    p: 2,
                    backgroundColor: 'background.paper',
                    flexGrow: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end',
                      flexGrow: 1,
                    }}
                  >
                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  </Box>
                  <MenuItem 
                  
                //   onClick={}
                  >
                    Profile
                  </MenuItem>
                 
                  <Divider />
                
                  <MenuItem>
                  {loggedIn ? (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  color="primary"
                  variant="text"
                  size="small"
                  component="a"
                  href="/creator-login"
                >
                  Sign in
                </Button>
              )}
                    
                    <Button
                      color="primary"
                      variant="outlined"
                      component="a"
                      href="/user-profile"
                      
                    //   target="_blank"
                      sx={{ width: '100%' }}
                    >
                      Profile
                    </Button>
                  
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default Navbar;
