import { Link } from "react-router-dom";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Box from "@mui/material/Box";
import { red } from '@mui/material/colors';

const Navigation = ({ user, menuId, handleProfileMenuOpen, classes }) => {

  return (
    <Box sx={{ display: { xs: "none", md: "flex" } }}>
      <div className={classes.myComponent}>
        <Link to="/favorites">
          {user.favorites.length > 0 ? (
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
        </Link>

        <Link to="/cart">
          <IconButton size="large" color="inherit">
            <Badge
              badgeContent={user.cart.reduce(
                (acc, cur) => acc + cur.quantity,
                0
              )}
              color="error"
            >
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
  );
};

export default Navigation;
