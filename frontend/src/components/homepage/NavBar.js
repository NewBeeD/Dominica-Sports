import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { useState } from 'react';


export const NavBar = () => {


  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
    setOpen(true)
  }



  return (
    <AppBar style={{ background: '#303841' }}>

      <Toolbar >

        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>Sports Dominica</Typography>


        <Stack direction='row' spacing={2} sx={{ flexGrow: 1}}>

          <Button 
          color='inherit' 
          id='dfa'
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}>DFA</Button>
          
          
          <Button color='inherit' id='dba'
          endIcon={<KeyboardArrowDownIcon />}>DBA</Button>
          <Button color='inherit' id='dca'
          endIcon={<KeyboardArrowDownIcon />}>DCA</Button>
        </Stack>

        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>

          <MenuItem onClick={handleClose}>Table</MenuItem>
          <MenuItem onClick={handleClose}>Fixtures</MenuItem>
        </Menu>

      </Toolbar>

    </AppBar>
  )
}
