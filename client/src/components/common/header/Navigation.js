import { Link } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

const Navigation = ({ menuId, handleProfileMenuOpen, classes }) => {

  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


      <div className={classes.myComponent}>

        <Link to='/favorites'>
          <IconButton size="large" aria-label="show 4 new mails">
            <Badge>
              <FavoriteBorderIcon />
            </Badge>
          </IconButton>
        </Link>



        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>

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