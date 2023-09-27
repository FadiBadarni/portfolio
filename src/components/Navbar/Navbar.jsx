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
import Colors from "utilities/Colors";
import MobileDrawer from "./MobileDrawer";

const navItems = [
  { title: "Home", path: "/home" },
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
      position="sticky"
      elevation={0}
      sx={{
        background: `rgba(32, 27, 39, 0.9)`,
        backdropFilter: "blur(8px)",
        borderRadius: "10px",
        boxShadow: `0px 4px 14px rgba(237, 231, 246, 0.2), 0px 2px 4px rgba(0, 0, 0, 0.1)`,

        "&::after": {
          content: '""',
          display: "block",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "5px",
          background:
            "radial-gradient(circle, rgba(237, 231, 246, 0.1), transparent)",
          zIndex: -1,
        },
      }}
    >
      <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h6" component="div">
              Dev Fadi
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
                          onClick={() => {
                            const element = document.getElementById(
                              item.path.substring(1)
                            );
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }}
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
                    onClick={() => {
                      const element = document.getElementById(
                        navItems[navItems.length - 1].path.substring(1)
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    sx={{
                      color: `${Colors.cultered}`,
                      fontSize: "1rem",
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
