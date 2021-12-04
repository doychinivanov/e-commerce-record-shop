import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import { connect } from 'react-redux';
import { useAuth } from '../../../contexts/AuthCtx';
import { removeUserFromState } from '../../../redux/user/user-actions';
 
const DekstopDropDown = ({anchorEl, menuId, isMenuOpen, handleMenuClose, removeUserFromState}) => {
  
  const { logout } = useAuth();

  const onLogout = async () => {
    await logout();
    removeUserFromState();
    handleMenuClose();
  }

    return (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{ mt: 5 }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem sx={{width: '100%'}} onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem sx={{width: '100%'}} onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem sx={{width: '100%'}} onClick={onLogout}>Logout</MenuItem>
      </Menu>
    );
}

const mapDispatchToProps = dispatch => {
  return {
      removeUserFromState: (userData) => dispatch(removeUserFromState(userData))
  }
}

export default connect(null, mapDispatchToProps)(DekstopDropDown);