import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  useMediaQuery,
  useTheme,
  Button,
  Typography,
} from "@mui/material";
import DrawerC from "./Drawer";
import { Link } from 'react-router-dom';
// const PAGES =["Product","Services","About us","contact us"]

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  // console.log(theme)
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log("my name is musa");
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{fontSize: "1.5rem", paddingLeft: "10%"}}>SHOPEE</Typography>
              <DrawerC />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                <Tab  label="Home" to='/' component={Link}/>
                <Tab  label="products" to='/products' component={Link}/>

                {/* {
                  PAGES.map((page,index)=>(
                <Tab key={index} label={page} />

                  ))
                } */}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default Navbar;
