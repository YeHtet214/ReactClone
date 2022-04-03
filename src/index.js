import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { ResultContextProvider } from './components/ResultContextProvider';

const theme = createTheme({
   palette: {
   }
})

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <ThemeProvider theme={theme} >
                <App />
            </ThemeProvider>
        </Router>
    </ResultContextProvider>,
 document.getElementById('root'));
