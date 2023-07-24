import { Grid, Typography, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function UseCaseCard({
  title,
  details,
  img_src,
  justify = "left",
}: {
  title: string;
  details: string;
  img_src: StaticImageData;
  justify?: string;
}) {
  const handleBreakAlign = () => {
    if (matchesBreakpoint) {
      return "left";
    } else if (justify === "left") {
      return "left";
    } else {
      return "right";
    }
  };
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      flexDirection={justify === "left" ? "row-reverse" : "row"}
      display={{ xs: "" }}
    >
      <Grid item xs={12} md={5}>
        <Grid
          container
          sx={{ height: "100%" }}
          alignContent={"center"}
          justifyContent={() => {
            if (matchesBreakpoint) {
              return "center";
            } else if (justify === "left") {
              return "right";
            } else {
              return "left";
            }
          }}
        >
          <Image
            src={img_src}
            style={{
              marginBottom: 30,
              maxWidth: "300px",
              height: "auto",
              position: "relative",
              objectFit: "contain",
            }}
            alt="none"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} md={7}>
        <Grid container sx={{ height: "100%" }} alignContent={"center"}>
          <Typography
            sx={{ width: "100%" }}
            textAlign={handleBreakAlign()}
            pb={2}
            fontSize={"38px"}
            fontWeight={"400"}
          >
            {title}
          </Typography>
          <Typography
            sx={{ width: "100%" }}
            textAlign={handleBreakAlign()}
            fontSize={"20px"}
          >
            {details}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
