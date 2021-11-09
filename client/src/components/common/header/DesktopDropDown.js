import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const DekstopDropDown = ({anchorEl, menuId, isMenuOpen, handleMenuClose}) => {

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
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
}

export default DekstopDropDown;