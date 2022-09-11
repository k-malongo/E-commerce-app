import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const PAGES = [
  "Product",
  "Services",
  "About us",
  "contact us",
  "Login",
  "Logout",
];

const DrawerC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>

          <ListItemButton onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to="/products" style={{ textDecoration: 'none', color:"black" }}>Products</Link>
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          {/* {PAGES.map((page, index) => (
            <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to="/products">products</Link>
                  {page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))} */}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};
export default DrawerC;
