import { Toolbar, Typography, Box, Grid, Button } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import AppBar from "@mui/material/AppBar";
import { Link, useNavigate } from "react-router-dom";

export const Navi = () => {
  const navigate = useNavigate();
  return (
    <AppBar style={{ background: "#2E3B55" }}>
      <Toolbar>
        <Grid xs={12} container>
          <Link to="/" style={{ color: "white" }}>
            <SpaIcon sx={{ mr: 3 }} fontSize="medium" />
          </Link>
          <Link to="/">
            <Typography
              style={{ color: "white" }}
              variant="h5"
              color="inherit"
              noWrap
            >
              Ekologie jako politická agenda
            </Typography>
          </Link>
        </Grid>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Button
            onClick={() => console.log("test")}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            Test
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
