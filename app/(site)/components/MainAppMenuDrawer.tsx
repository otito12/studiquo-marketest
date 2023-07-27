import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import logo from "../../../public/logo.jpeg";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar({
  open,
  setOpen,
  navItems,
}: {
  open: boolean;
  setOpen: Function;
  navItems: any;
}) {
  const handleDrawerToggle = () => {
    setOpen((prevState: boolean) => !prevState);
  };
  const router = useRouter();
  return (
    <Grid container>
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiBackdrop-root": {
            background: "#00000020",
          },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Grid sx={{ textAlign: "center" }}>
          <Button
            disableRipple
            onClick={() => router.push("/")}
            sx={{
              color: "#1C1E21",
              textTransform: "none",
              ":hover": {
                background: "white",
              },
            }}
          >
            <Image
              src={logo}
              style={{
                width: "50px",
                height: "50px",
                position: "relative",
                objectFit: "fill",
              }}
              alt="none"
            />
          </Button>
          <Divider />
          <List>
            {navItems.map((item: any) => (
              <ListItem
                onClick={() => {
                  handleDrawerToggle();
                  router.push(`${item.link}`);
                }}
                key={item.label}
                disablePadding
              >
                <ListItemButton sx={{ textAlign: "center" }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Drawer>
    </Grid>
  );
}
