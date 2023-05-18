import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar() {
  return (
   <Box sx={{ flexGrow: 1 }}>
         <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
           <Toolbar>
             <IconButton
               size="large"
               edge="start"
               aria-label="menu"
               sx={{ mr: 2 }}
             >
               <img
                 src={require("../assets/logo.png")}
                 alt="LOGO"
                 width="172px"
                 height="54px"
               />
             </IconButton>
           </Toolbar>
         </AppBar>
       </Box>
   
  );
}
