import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { Grid } from "@mui/material";
import { useRouter } from "next/navigation";

export default function ButtonAppBar({
  elevation = true,
}: {
  elevation?: boolean;
}) {
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          height: "60px",
          background: "white",
          color: "black",
          zIndex: "1",
          p: 0.5,
          pl: 1,
          pr: 3,
          m: 0,
          boxShadow: elevation ? "1px 1px 3px #e1e1e1 !important" : "none",
        }}
      >
        <Grid
          container
          sx={{ height: "100%" }}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item>
            <Button
              disableRipple
              sx={{
                color: "#1C1E21",
                textTransform: "none",
                ":hover": {
                  background: "white",
                },
              }}
              onClick={() => router.push("/")}
            >
              <Image
                src={logo}
                style={{
                  width: "30px",
                  height: "30px",
                  position: "relative",
                  objectFit: "cover",
                }}
                alt="none"
              />
              <Typography
                variant="body1"
                component="div"
                fontWeight={600}
                sx={{ flexGrow: 1, pl: 2, fontSize: "16px" }}
              >
                Studiquo | Grade 6 Maths
              </Typography>
            </Button>
          </Grid>
          <Grid item>
            {/* <Button
              disableRipple
              sx={{
                color: "#1C1E21",
                fontSize: "15px",
                textTransform: "none",
                ":hover": {
                  background: "white",
                  color: "#403bd9",
                },
              }}
            >
              Twitter
              <OpenInNewIcon sx={{ ml: 1, width: "20px", height: "20px" }} />
            </Button>
            <Button
              disableRipple
              sx={{
                color: "#1C1E21",
                fontSize: "15px",
                textTransform: "none",
                ":hover": {
                  background: "white",
                  color: "#403bd9",
                },
              }}
            >
              Github
              <OpenInNewIcon sx={{ ml: 1, width: "20px", height: "20px" }} />
            </Button> */}
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
