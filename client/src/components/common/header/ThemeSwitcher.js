import {useColorMode} from '../../../contexts/ColorModeCtx';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ThemeSwitcher = () => {
    const {colorMode} = useColorMode();
    const theme = useTheme();


    return (
        <IconButton sx={{ mr: 5 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
      );
}

export default ThemeSwitcher;