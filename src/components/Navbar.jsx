import React, { useState } from 'react';
import { AppBar, IconButton, Toolbar, Typography, Container } from '@mui/material';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import { Search } from './Search';

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: 'none !important',
    backgroundColor: 'transparent !important',
  },
  darkOnIcon: dark => ({
    color: dark ? theme.palette.primary.main : '',
  }),
  searchStyle: dark => ({
    margin: 'auto',
    display: 'flex',
    flexWrap: 'no-wrap',
    borderRadius: '5px',
    background: dark ? '#fff' : theme.palette.primary.dark,
    color: dark ? 'inherit' : '#fff',
    [theme.breakpoints.up('md')]: {
      width: '300px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '200px'
    },

    '& .MuiInputBase-root': {
      fontWeight: '500 !important',
      color: dark ? '#111' : '#fff'
    },
    '& .MuiSvgIcon-root': {
      color: dark ? 'inherit' : '#fff'
    }
  }),
}));

export const Navbar = ({ dark, setDark }) => {

  const [toggle, setToggle] = useState('off');
  const classes = useStyles(dark);

  // Switch between light and dark theme
  const handleTheme = () => {
    setToggle(toggle => toggle === 'off' ? 'on' : 'off');
    setDark(!dark)
  }
  
  return (
    <Container >
      <AppBar position='static' className={classes.appBar} >
        <Toolbar >
          <Link to='https://www.google.com' style={{ textDecoration: 'none', flex: 1}}>
            <Typography variant='h5' color='primary' underline='none'>Google</Typography> 
          </Link>
          <IconButton className={classes.toggleIcon}  onClick={() => handleTheme()} >
            {toggle === 'off' ? (
              <ToggleOffIcon fontSize='large'/>
            ) : <ToggleOnIcon fontSize='large' className={classes.darkOnIcon} />
          }
          </IconButton>
        </Toolbar>
      </AppBar>
      <Search />
    </Container>
  )
}
