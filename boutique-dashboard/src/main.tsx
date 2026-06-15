import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {CssBaseline, ThemeProvider, createTheme} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            main: '#2D3436',
        },
        background: {
            default: '#f9f9f9',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);