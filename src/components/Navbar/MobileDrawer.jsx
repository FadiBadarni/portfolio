import React from "react";
import {
  Drawer,
  List,
  ListItem,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const drawerVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 400, damping: 25, mass: 1.2 },
      opacity: { duration: 0.3, ease: "easeOut" },
    },
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 400, damping: 25, mass: 1.2 },
      opacity: { duration: 0.3, ease: "easeOut" },
    },
  },
};

const MobileDrawer = ({ open, handleClose, navItems }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={drawerVariants}
        >
          <Drawer
            anchor="right"
            open={open}
            onClose={handleClose}
            PaperProps={{
              component: motion.div,
              variants: drawerVariants,
            }}
            sx={{
              width: 200,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: 200,
                background: "#1a1a1a",
              },
            }}
          >
            <Grid container spacing={2} sx={{ padding: 3 }}>
              <Grid item xs={12} align="center">
                <Typography variant="h5" color="white">
                  Navigate
                </Typography>
              </Grid>
              <List>
                {navItems.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <ListItem button onClick={handleClose}>
                      <Button
                        color="inherit"
                        href={item.path}
                        fullWidth
                        sx={{
                          color: "#FFF",
                          textTransform: "none",
                          fontSize: "1.2rem",
                        }}
                      >
                        {item.title}
                      </Button>
                    </ListItem>
                  </Grid>
                ))}
              </List>
            </Grid>
          </Drawer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
