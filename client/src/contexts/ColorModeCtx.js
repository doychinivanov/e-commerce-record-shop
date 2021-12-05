import React, { useContext, useMemo } from 'react';
import { connect } from 'react-redux';
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, grey, deepOrange } from '@mui/material/colors';

import { changeTheme } from '../redux/theme/theme-actions';

const ColorModeCtx = React.createContext();

export const useColorMode = () => useContext(ColorModeCtx)

const ColorModeProvider = ({ children, currentMode, changeTheme }) => {

    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: orange,
                divider: orange[700],
                background: {
                  primary: '#fff',
                  secondary: orange[100],
                },
                text: {
                  primary: grey[900],
                  secondary: orange[500],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  primary: '#1E1E1E',
                  secondary: grey[900],
                },
                text: {
                  primary: '#f5f5f5',
                  secondary: '#fff',
                },
              }),
        },
      });

    // const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
              changeTheme();
            },
        }),
        [changeTheme],
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(currentMode)), [currentMode]);

    const value = {colorMode, theme}
    return (
        <ColorModeCtx.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeCtx.Provider>
    );
}


const mapStateToProps = state => {
  return {
    currentMode: state.mode.mode
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTheme: () => dispatch(changeTheme()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorModeProvider);