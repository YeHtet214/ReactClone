import React, { useState, useEffect } from 'react'
import { useDebounce } from 'use-debounce'
import { Box, InputBase, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'

import { useResultContext } from './ResultContextProvider'
import { Links } from './Links'

const useStyles = makeStyles(theme => ({
  linkTag: {
    width: '50%',
    marginTop: '-.1em',
    marginBottom: '1em', 
    textAlign: 'left',
    padding: '0.5em 0.9em',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('sm')]: {
      width: '70%'
    },

    '&:hover': {
      boxShadow: 3
    }
  }
}))

export const Search = () => {
  const [text, setText] = useState('Elon Musk');
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(text, 300);

  const classes = useStyles();

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue)
  }, [debouncedValue])

  return (
    <Box style={{ textAlign: 'center', }}>
      <Paper elevation={1} className={classes.linkTag} >
        <InputBase 
          placeholder='Search'
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </Paper>
      <Links />
    </Box>
  )
}
