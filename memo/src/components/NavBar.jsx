import { Paper, AppBar, Toolbar, Typography } from "@mui/material";
export default function NavBar() {
  return (
    <Paper
      sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 2 }}
      elevation={3}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Charles Memos
          </Typography>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
