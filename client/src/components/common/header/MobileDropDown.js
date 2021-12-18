import { Link } from "react-router-dom";

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ThemeSwitcher from './ThemeSwitcher';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { red } from '@mui/material/colors';

const MobileDropDown = ({user, mobileMoreAnchorEl, isMobileMenuOpen, handleMobileMenuClose, handleProfileMenuOpen, mobileMenuId }) => {
    return (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            sx={{ mt: 5 }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem sx={{width: '100%'}}>
                <ThemeSwitcher />
            </MenuItem>

            <Link to="/favorites">
            <MenuItem sx={{width: '100%'}}>
            {user?.favorites?.length > 0 ? (
                <IconButton size="large">
                    <Badge >
                        <FavoriteIcon style={{ color: red[500] }} />
                    </Badge>
                </IconButton>
                ) : (
                <IconButton size="large" color="inherit">
                    <Badge>
                        <FavoriteBorderIcon />
                    </Badge>
                </IconButton>
            )}
                <p>Favorites</p>
            </MenuItem>
            </Link>

            <Link to="/cart">
            <MenuItem sx={{width: '100%'}}>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={user?.cart?.reduce((acc, cur) => acc + cur.quantity,0)} color="error">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            </Link>

            <MenuItem onClick={handleProfileMenuOpen} sx={{width: '100%'}}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    )
}

export default MobileDropDown;