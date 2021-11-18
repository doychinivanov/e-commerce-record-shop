import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import SearchBar from './SearchBar';
import MobileDropDown from './MobileDropDown';
import DesktopDropDown from './DesktopDropDown';
import LogoBanner from './LogoBanner';
import Navigation from './Navigation';
import ThreeDotsButton from './ThreeDotsButton';

const NavBar = ({theme}) => {

  const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <DesktopDropDown
      anchorEl={anchorEl}
      menuId={menuId}
      isMenuOpen={isMenuOpen}
      handleMenuClose={handleMenuClose}
    />
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <MobileDropDown
      mobileMoreAnchorEl={mobileMoreAnchorEl}
      isMobileMenuOpen={isMobileMenuOpen}
      handleMobileMenuClose={handleMobileMenuClose}
      handleProfileMenuOpen={handleProfileMenuOpen}
      mobileMenuId={mobileMenuId}
    />
  );

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar>
          <SearchBar textColor={textColor} />

          <LogoBanner textColor={textColor} />

          <Navigation menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen} textColor={textColor}/>

          <ThreeDotsButton mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen} textColor={textColor}/>
        </Toolbar>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
    </Box>

  );
}


export default NavBar;