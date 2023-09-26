import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { motion, AnimatePresence } from "framer-motion";
import Colors from "../utilities/Colors";
import MobileDrawer from "./Navigation/MobileDrawer";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Work", path: "/work" },
  { title: "Skills", path: "/skills" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuIconVariants = {
    opened: { rotate: 45 },
    closed: { rotate: 0 },
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: `${Colors.raisinBlack}`,
        boxShadow: `0px 2px 0px 0px rgba(0, 0, 0, 0.1)`,
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" component="div">
              Fadi Solutions
            </Typography>
          </Grid>

          {isMobile ? (
            <Grid item>
              <motion.div
                variants={menuIconVariants}
                initial="closed"
                animate={drawerOpen ? "opened" : "closed"}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </motion.div>
            </Grid>
          ) : (
            <>
              <Grid item xs>
                <Grid container spacing={4} justifyContent="center">
                  {navItems.slice(0, -1).map((item, index) => (
                    <Grid item key={index}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button
                          href={item.path}
                          sx={{
                            color: `${Colors.cultered}`,
                            fontSize: "1rem",
                          }}
                        >
                          {item.title}
                        </Button>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              <Grid item>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button
                    href={navItems[navItems.length - 1].path}
                    sx={{
                      color: `${Colors.cultered}`,
                    }}
                  >
                    {navItems[navItems.length - 1].title}
                  </Button>
                </motion.div>
              </Grid>
            </>
          )}
        </Grid>
      </Toolbar>

      <AnimatePresence>
        {isMobile && (
          <MobileDrawer
            open={drawerOpen}
            handleClose={handleDrawerToggle}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </AppBar>
  );
};

export default Navbar;
