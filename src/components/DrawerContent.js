import React, { useState } from "react";
import { Box, Avatar, Typography } from "@material-ui/core";
import Logo from "../assets/images/logo_SDMtransparent 1.png";
import userAvatar from "../assets/images/Ellipse 96.png";
function DrawerContent() {
  return (
    <Box className="drawerContainer" display="flex" flexDirection="column">
      <Box className="logoContainer">
        <img src={Logo} className="logoStyle" />
      </Box>
      <Avatar src={userAvatar} className="userAvatar" />
      <Typography align="center" className="userName">
        DUDUNG ROHIMAT
      </Typography>
      <Typography align="center" className="userRole">
        ADMIN C - PT. Berkah Nusantara
      </Typography>
    </Box>
  );
}

export default DrawerContent;
