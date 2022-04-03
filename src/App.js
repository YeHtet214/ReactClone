import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { RoutePaths } from './components/Routes';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  pageDark: {
    background: '#111',
    height: '100vh',
    width: '100vw',
    overflowY: 'auto',
    color: '#fff',
  },
}));

export const App = () => {
  const classes = useStyles();

  const [dark, setDark] = useState(false);

  return (
    <Box className={dark ? classes.pageDark : ''}>
      <CssBaseline />
      <Navbar dark={dark} setDark={setDark} />
      <RoutePaths dark={dark} />
      <Footer />
    </Box>
  )
}
