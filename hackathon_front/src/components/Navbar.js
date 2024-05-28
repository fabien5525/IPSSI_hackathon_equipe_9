import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/OlympicsAI.png';

const useStyles = {
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer', // Make the div look clickable
  },
  logo: {
    height: '40px',
    marginRight: '10px',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navButton: {
    marginLeft: '20px',
  },
};

const NavbarButton = styled(Button)(({ theme }) => ({
  marginLeft: '20px',
}));

function Navbar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <div style={useStyles.title} onClick={handleLogoClick}>
          <img src={logo} alt="Olympics Logo" style={useStyles.logo} />
          <Typography variant="h6" color="inherit">
            OLYMPICS.AI
          </Typography>
        </div>
        <div style={useStyles.navLinks}>
          <NavbarButton href="#data">DATA</NavbarButton>
          <NavbarButton onClick={handleMenu}>
            VISUALIZATIONS
          </NavbarButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component="a" href="#medals-timeline">Medals Timeline</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#gender-body-composition">Gender & Body Composition</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#medals-vs-gdp">Medals VS GDP</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#medals-world-view-seasons">Medals World View - Seasons</MenuItem>
            <MenuItem onClick={handleClose} component="a" href="#medals-world-view-sport">Medals World View - Sport</MenuItem>
          </Menu>
          <NavbarButton href="#analysis">ANALYSIS</NavbarButton>
          <NavbarButton href="#olympic-facts">OLYMPIC FACTS</NavbarButton>
          <NavbarButton href="#olympic-medal-predictions">OLYMPIC MEDAL PREDICTIONS</NavbarButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
