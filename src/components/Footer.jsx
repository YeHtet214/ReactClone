import React from 'react'
import { Container, Typography } from '@mui/material'

export const Footer = () => {
  return (
    <Container style={{ textAlign: 'center', borderTop: '1px solid #2222', marginTop: '1em', padding: '1.5em 0' }}>
      <Typography variant='caption' >
       2022 Google 
      </Typography>
    </Container>
  )
}
