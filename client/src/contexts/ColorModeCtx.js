import React, { useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from "@mui/material";
import { orange, grey, deepOrange } from '@mui/material/colors';

const ColorModeCtx = React.createContext();

export const useColorMode = () => useContext(ColorModeCtx)

export const ColorModeProvider = ({ children }) => {

    const getDesignTokens = (mode) => ({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: orange,
                divider: orange[700],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  primary: '#fff',
                  secondary: grey[500],
                },
                text: {
                  primary: '#f5f5f5',
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