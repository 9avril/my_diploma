import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Popover,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";

const CustomAppBar = styled(AppBar)({
  background: "#070e34",
});

const CustomPopover = styled(Popover)({
  "& .MuiPaper-root": {
    background: "#00051a", // замените YOUR_COLOR на нужный цвет
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <CustomAppBar
      position="static"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0)",
        marginBottom: "40px",
      }}
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography
          variant="h6"
          component={NavLink}
          to="/"
          color="inherit"
          sx={{ flexGrow: 1 }}
        >
          SZN Visualization
        </Typography>
        <Button color="inherit" component={NavLink} to="/routers">
          Routers
        </Button>
        <Button color="inherit" component={NavLink} to="/access_points">
          AC Points
        </Button>
        <Button color="inherit" component={NavLink} to="/obstacles">
          Obstacles
        </Button>
        <Button
          aria-describedby={id}
          color="inherit"
          onMouseEnter={handleClick}
        >
          Charts
        </Button>
        <Button color="inherit" component={NavLink} to="/heatmap">
          Heatmap
        </Button>
        <CustomPopover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Box p={2}>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/charts/first-floor"
              sx={{ color: "#f0f2f5" }} // замените YOUR_COLOR на нужный цвет
            >
              First Floor
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/charts/second-floor"
              sx={{ color: "#f0f2f5" }}
            >
              Second Floor
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/charts/third-floor"
              sx={{ color: "#f0f2f5" }}
            >
              Third Floor
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/charts/fourth-floor"
              sx={{ color: "#f0f2f5" }}
            >
              Fourth Floor
            </MenuItem>
          </Box>
        </CustomPopover>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Navbar;
