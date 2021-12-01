import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

const Navigation = ({ user, menuId, handleProfileMenuOpen, classes }) => {

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


      <div className={classes.myComponent}>

        <Link to='/favorites'>
          <IconButton size="large">
            <Badge>
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Link>


        <Link to='/cart'>
          <IconButton
            size="large"
            color="inherit"
          >
            <Badge badgeContent={user.cart.reduce((acc, cur) => acc + cur.quantity, 0)} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </Link>


        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >

          <AccountCircle />

        </IconButton>
      </div>
    </Box>
  )
}

export default Navigation;