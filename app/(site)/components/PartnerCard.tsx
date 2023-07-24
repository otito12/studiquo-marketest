import { Grid, Icon, Typography, useMediaQuery, useTheme } from "@mui/material";
import { StaticImageData } from "next/image";
import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";

import React from "react";

export default function PartnerCard({
  title,
  icon,
  img_srcs,
}: {
  title: string;
  icon: React.ElementType<any>;
  img_srcs: StaticImageData[];
}) {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <Grid container justifyContent={"center"}>
          <Icon
            component={icon}
            sx={{
              height: "60px",
              width: "60px",
              p: 2,
              color: "#403A93",
            }}
          />
          <Grid item mb={matchesBreakpoint ? 3 : 0} xs={12}>
            <Typography textAlign={"center"} fontSize={"20px"}>
              {title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={"auto"}>
        <Grid container alignContent={"center"} sx={{ height: "100%" }}>
          {img_srcs.map((img) => (
            <Grid
              container
              flex={1}
              mr={matchesBreakpoint ? 0 : 5}
              mt={matchesBreakpoint ? 3 : 0}
              justifyContent={"center"}
            >
              <Image
                src={img}
                style={{
                  height: "100%",
                  maxWidth: "200px",
                  position: "relative",
                  objectFit: "contain",
                }}
                alt="none"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
