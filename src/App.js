import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatorLoginPage from './pages/Auth/CreatorLoginPage';
import CreatorSignupPage from './pages/Auth/CreatorSignupPage';
import OrgLoginPage from './pages/Auth/OrgLoginPage';
import SelectedUserLoginPage from './pages/Auth/SelectedUserLoginPage';
import NoAccessPage from './pages/Auth/NoAccessPage';
import Home from './pages/Home/Home';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import SelecetdUserSignsupPage from './pages/Auth/SelectedUserSignsupPage'
import ActivatePage from './pages/Auth/ActivatePage';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import UserHomePage from './pages/Landing/UserHomePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import getLPTheme from './pages/Home/getLPTheme';
import Navbar from './components/Navbar/Navbar';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProfilePage from './pages/Profile/ProfilePage';
import ResetUsernamePage from './pages/Auth/ResetUsernamePage';
import Forms from './pages/FormAdmin/Forms'
import Create from './pages/FormAdmin/Create'
// import RenderReactiveForm from './components/FormAdmin/RenderReactiveForm';
import Fill from './pages/FormAdmin/Fill';
function App() {
  const [mode, setMode] = React.useState('light');
  const LPtheme = createTheme(getLPTheme(mode));


  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };
  return (<>
    <ThemeProvider theme={LPtheme}>
    <CssBaseline />
    {/* <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        // height: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #CEE5FD)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        border:'solid 10px green',
        height: '10vh', 
        // position:'fixed',
        // zIndex:'100'
        

      
      })}
    > */}
      {/* <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
         
        }}
      > */}
      <div style={{ 
        // border:'solid 2px yellow' , 
       
        height:'13vh'  , background: '#CEE5FD',opacity:1, 
       }}>
      <Navbar mode={mode} toggleColorMode={toggleColorMode} />
      </div>
      
      {/* </Container> */}
      {/* </Box> */}
      </ThemeProvider>
   
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/creator-login" element={<CreatorLoginPage/>} />
          <Route path="/creator-signup" element={<CreatorSignupPage/>} />
          <Route path="/org-login" element={<OrgLoginPage/>} />
          <Route path="/selected-user-login" element={<SelectedUserLoginPage/>} />
          <Route path="/no-access" element={<NoAccessPage/>} />
          <Route path="/selected-user-signup" exact element={<SelecetdUserSignsupPage/>} />
          <Route path="/auth/activate" element={<ActivatePage/>} />
          <Route path="/auth/reset-password" element={<ResetPasswordPage/>} />
          <Route path="/user-home" element={<UserHomePage/>} />
          <Route path="/user-profile" element={<ProfilePage />} />
          <Route path="/auth/reset-username" element={<ResetUsernamePage />} />
          <Route path="/forms" element={<Forms/>} />
          <Route path="/create-form" element={<Create/>} />
          <Route path="/fill-form" element={<Fill/>}/>
          {/* Add more routes as needed */}
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
   
    </>);
}

export default App;
