import { Button, Grid, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import maincard from "../../../public/landing.svg";
import { useRouter } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function MainPageCard() {
  const router = useRouter();
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      alignContent={"center"}
      justifyContent={"center"}
      sx={{ zIndex: 0 }}
    >
      <Image
        src={maincard}
        style={{
          width: matchesBreakpoint ? "300px" : "475px",
          height: matchesBreakpoint ? "300px" : "475px",
          position: "relative",
          objectFit: "fill",
        }}
        alt="none"
      />
    </Grid>
  );
}
