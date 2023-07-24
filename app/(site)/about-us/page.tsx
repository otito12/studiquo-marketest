"use client";
import {
  Button,
  Divider,
  Grid,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import maincard from "../../../public/about-us.svg";
import Image from "next/image";

export default function FundsPage() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container direction={"column"} sx={{ hieght: "100%", pt: 12 }}>
      <Grid container justifyContent={"center"}>
        <Grid
          container
          alignItems={"start"}
          justifyContent={"center"}
          // sx={{ maxWidth: matchesBreakpoint ? "100vw" : "80vw" }}
        >
          <Grid
            container
            sx={{
              // pt: 2,
              borderRadius: "18px",
            }}
          >
            <Image
              src={maincard}
              style={{
                width: "100%",
                height: "560px",
                position: "relative",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              alt="none"
            />
          </Grid>

          <Grid container>
            <Grid container sx={{ width: "100%", mb: 10 }}>
              <Grid item xs={12} mt={3}>
                <Typography fontWeight={"600"} fontSize={"38px"} pt={3} pb={3}>
                  Our Team
                </Typography>
              </Grid>
              <Grid item xs={12} pb={3}>
                <Typography fontSize={"20px"}>
                  Investing in a US Treasury bills ETF is a low-risk investment
                  that delivers a stable and predictable return while offering
                  deep liquidity.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontWeight={"600"} fontSize={"38px"} pt={3} pb={3}>
                  Our Mission
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography fontSize={"20px"}>
                  Investing in a US Treasury bills ETF is a low-risk investment
                  that delivers a stable and predictable return while offering
                  deep liquidity.
                </Typography>
              </Grid>
              <Grid
                container
                pt={2}
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "20px",
                  },
                  "& .MuiSvgIcon-root": {
                    width: "30px",
                    height: "30px",
                    mr: 1,
                    color: "#01AC99",
                  },
                }}
              ></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
