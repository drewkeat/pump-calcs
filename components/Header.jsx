import { AppBar, Container, Toolbar, Typography } from "@mui/material"

export default function Header(){
  return(
    <AppBar position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <Typography variant="h6">Pump Calcs</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}