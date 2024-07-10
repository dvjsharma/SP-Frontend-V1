import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import { Button, ButtonGroup } from '@mui/material';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <div className="home">
    
    <h1>Welcome to the Survey Platform</h1>
    <p>This is the homepage of our survey platform.</p>
    <ButtonGroup variant="contained" aria-label="Large button group">

      <Link to = "/creator-login"><Button value="create">CREATE</Button></Link>
      <Link to = "/creator-login"><Button value="vote-email">   VOTE   </Button></Link>
      <Link to = "/org-login"><Button value="vote-oauth">VOTE BY OAUTH</Button></Link>
    </ButtonGroup>
  </div>
      
      </Container>
    </Box>
  );
}
