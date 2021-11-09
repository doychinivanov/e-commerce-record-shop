import React, { useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import { amber, grey, deepOrange } from '@mui/material/colors';

const ColorModeCtx = React.createContext();

export const useColorMode = () => useContext(ColorModeCtx)

export const ColorModeProvider = ({ children }) => {

    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: amber,
                divider: amber[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: deepOrange,
                divider: deepOrange[700],
                background: {
                  default: deepOrange[900],
                  paper: deepOrange[900],
                },
                text: {
                  primary: '#fff',
                  secondary: grey[500],
                },
              }),
        },
      });

    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const value = {colorMode}
    return (
        <ColorModeCtx.Provider value={value}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeCtx.Provider>
    );
}