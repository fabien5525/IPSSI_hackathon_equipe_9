import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
  customButton: {
    marginLeft: '20px',
  },
  menuItem: {
    padding: '4px 35px', 
  },
};

const NavbarButton = styled(Button)(({ theme }) => ({
  ...useStyles.customButton,
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
          <NavbarButton onClick={handleMenu}>
            VISUALISATIONS
            <ArrowDropDownIcon />
          </NavbarButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
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
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/games"
              sx={useStyles.menuItem}
            >
              Jeux
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/athletes"
              sx={useStyles.menuItem}
            >
              Athlètes
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/countries"
              sx={useStyles.menuItem}
            >
              Pays
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={Link}
              to="/participations"
              sx={useStyles.menuItem}
            >
              Participations
            </MenuItem>
          </Menu>
          <NavbarButton component={Link} to="/analysis">ANALYSES</NavbarButton>
          <NavbarButton component={Link} to="/olympic-medal-predictions">PRÉVISIONS DE MÉDAILLES OLYMPIQUES</NavbarButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
