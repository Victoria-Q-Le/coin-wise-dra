import { AppBar, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Header = () => {
  return (
    <AppBar color='primary' position='static'>
      <Container>
        <Toolbar>
          <Typography>Coin Wise</Typography>

          <Select>
            <MenuItem>USD</MenuItem>
            <MenuItem>VND</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
