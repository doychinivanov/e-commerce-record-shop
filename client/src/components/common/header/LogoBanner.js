import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlbumIcon from '@mui/icons-material/Album';

const LogoBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h5"
              noWrap
              fontFamily="Ubuntu sans-serif"
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, textAlign: "center" }}
            >
              <AlbumIcon />
              Vinyled
            </Typography>
          </Box>
    )
}

export default LogoBanner;