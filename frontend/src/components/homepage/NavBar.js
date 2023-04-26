import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material'
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';


export const NavBar = () => {


  return (
    <AppBar style={{ background: '#303841' }}>

      <Toolbar >

        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>Sports Dominica</Typography>


        <Stack direction='row' spacing={2} sx={{ flexGrow: 1, border: '2px solid red'}}>
          <Button color='inherit'>DFA</Button>
          <Button color='inherit'>DBA</Button>
          <Button color='inherit'>DCA</Button>
        </Stack>

      </Toolbar>

    </AppBar>
  )
}
