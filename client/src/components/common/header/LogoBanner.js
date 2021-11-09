import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const LogoBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, textAlign: "center" }}
            >
              Vinyled
            </Typography>
          </Box>
    )
}

export default LogoBanner;