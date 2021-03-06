import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import ThemeSwitcher from './ThemeSwitcher';

import SearchBar from './SearchBar';
import MobileDropDown from './MobileDropDown';
import DesktopDropDown from './DesktopDropDown';
import LogoBanner from './LogoBanner';
import Navigation from './Navigation';
import ThreeDotsButton from './ThreeDotsButton';
import SignButton from './SignButton';
import AuthModal from '../../modals/AuthModal';

import { turnModalOn, turnModalOff } from '../../../redux/authModal/modal-actions';

const NavBar = ({ theme, user, authModal, turnModalOn, turnModalOff }) => {
  const textColor = theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.background.secondary;

  const useStyles = makeStyles({
    myComponent: {
      "& .MuiIconButton-root": {
        color: textColor
      },
      "& .MuiInputBase-root": {
        color: textColor
      },
      "& .MuiSvgIcon-root": {
        color: textColor
      },
    }
  });

  const classes = useStyles();

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
      user={user}
    />
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <SearchBar classes={classes} />

            <LogoBanner textColor={textColor} />

            <span className={classes.myComponent}>
              <ThemeSwitcher />
            </span>


            {user ?
              <>
                <Navigation user={user} menuId={menuId} handleProfileMenuOpen={handleProfileMenuOpen} classes={classes} />

                <ThreeDotsButton mobileMenuId={mobileMenuId} handleMobileMenuOpen={handleMobileMenuOpen} classes={classes} />
              </>
              : <SignButton handleOpen={turnModalOn} theme={theme} textColor={textColor} />
            }

          </Toolbar>
        </AppBar>

        {renderMobileMenu}
        {renderMenu}
      </Box>

      <AuthModal open={authModal.isOn} handleClose={turnModalOff} theme={theme} />
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    authModal: state.authModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    turnModalOn: () => dispatch(turnModalOn()),
    turnModalOff: () => dispatch(turnModalOff())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);