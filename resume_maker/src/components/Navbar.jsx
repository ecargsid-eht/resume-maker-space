import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

const Navbar = () => {

  const ColorButton = styled(Button)(() => ({
    color: "white",
    width:"300px",
    backgroundColor: "#333333",
    '&:hover': {
      backgroundColor: "black",
    },
    fontFamily:"Catamaran"
  }));
  const location = useLocation();
  return (
    <AppBar position="static" elevation={0} sx={{background: `${location.pathname === "/" ? 'transparent' : '#2dc46a'}`}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            resuméMAKER
          </Typography> */}
          <Box component="img" src="https://www.logomaker.com/api/main/images/1j+ojVVCOMkX9Wyrexe4hGfL27XF8UIyyUWYlSg3aD1fqVY4nSgljvBi9...48KgtFvwhKxkECc8A4iSN9WYkSjAw0oWDTcNYcHj1zzw==" sx={{width:"100px",}}/>
          <Box flexGrow={1}/>
          {(location.pathname === "/") && 
          <ColorButton component={Link} to="/request-template-form"  variant="contained" sx={{width:"200px"}}>REQUEST A TEMPLATE</ColorButton>}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
