import { Toolbar, Typography, Box, Grid } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";
import AppBar from "@mui/material/AppBar";
import { Link, useNavigate } from "react-router-dom";

// TODO: Fix responsiveness bug ( Map page on mobile )
export const Navi = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="relative" style={{ background: "#2E3B55" }}>
      <Toolbar>
        <Grid xs={4} container>
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
      </Toolbar>
    </AppBar>
  );
};
