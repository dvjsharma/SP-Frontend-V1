import * as React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../../components/Landing/AppAppBar';
import Hero from '../../components/Landing/Hero';
import LogoCollection from '../../components/Landing/LogoCollection';
import Highlights from '../../components/Landing/Highlights';
import Pricing from '../../components/Landing/Pricing';
import Features from '../../components/Landing/Features';
import Testimonials from '../../components/Landing/Testimonials';
import FAQ from '../../components/Landing/FAQ';
import getLPTheme from './getLPTheme';
import Footer from '../../components/Landing/Footer';
import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserHomePage() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));


  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

 

  return (<>
    {/* <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}> */}
   
    
      <div className="home">
    
    <h1>Welcome to the Survey Platform</h1>
    <p>This is the homepage of our survey platform.</p>
    <ButtonGroup variant="contained" aria-label="Large button group">

      <Link to = "/creator-login"><Button value="create">CREATE</Button></Link>
      <Link to = "/creator-login"><Button value="vote-email">   VOTE   </Button></Link>
      <Link to = "/org-login"><Button value="vote-oauth">VOTE BY OAUTH</Button></Link>
    </ButtonGroup>
  </div>
      
     
      
   
    </>
  );
}