import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlbumIcon from '@mui/icons-material/Album';
import { Link } from 'react-router-dom';

const LogoBanner = ({ textColor }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Link to="/">
        <Typography
          color={textColor}
          variant="h5"
          noWrap
          fontFamily="Ubuntu sans-serif"
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' }, textAlign: "center" }}
        >
          <AlbumIcon />
          Vinyled
        </Typography>
      </Link>
    </Box>
  )
}

export default LogoBanner;