import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

const ThreeDotsButton = ({ mobileMenuId, handleMobileMenuOpen, classes }) => {

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <div className={classes.myComponent}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </div>
    </Box>
  )
}

export default ThreeDotsButton;