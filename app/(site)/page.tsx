"use client";
import {
  Button,
  Divider,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import MainPageCard from "./components/MainPageCard";
import BoltIcon from "@mui/icons-material/Bolt";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeCard from "./components/HomeCard";

export default function page() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      alignItems={"center"}
      alignSelf={"center"}
      justifySelf={"center"}
    >
      <Grid
        sx={{
          zIndex: 3,
          pl: matchesBreakpoint ? 3 : "10vw",
          pr: matchesBreakpoint ? 3 : "10vw",
        }}
      >
        <Grid
          container
          alignItems={"center"}
          alignSelf={"center"}
          justifySelf={"center"}
          sx={{ height: "85vh" }}
          mt={matchesBreakpoint ? 10 : 0}
        >
          <Grid item md={12} lg={7}>
            <Grid container justifyItems={"center"}>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: matchesBreakpoint ? "55px" : "55px",
                    fontWeight: "bold",
                    textAlign: `${matchesBreakpoint ? "center" : "left"}`,
                  }}
                >
                  A teaching standard
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    fontSize: matchesBreakpoint ? "55px" : "55px",
                    alignItems: "center",
                    alignContent: "center",
                    fontWeight: "bold",
                    color: "#61EE8B",
                    textAlign: `${matchesBreakpoint ? "center" : "left"}`,
                    mr: 1,
                  }}
                >
                  super charged by AI
                  <BoltIcon
                    sx={{
                      ml: "1",
                      color: "#61EE8B",
                      height: "50px",
                      width: "50px",
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  color={"#717171"}
                  sx={{
                    mt: 4,
                    fontSize: "20px",
                    textAlign: `${matchesBreakpoint ? "center" : "left"}`,
                  }}
                >
                  We empower teachers with AI powered tools and resources to aid
                  Learning
                </Typography>
              </Grid>

              <Grid
                container
                alignItems={"center"}
                justifyContent={matchesBreakpoint ? "center" : "left"}
              >
                <Button
                  disableRipple
                  sx={{
                    mt: 5,
                    p: 2,
                    pl: 3,
                    pr: 3,
                    borderRadius: "20px",
                    background: "#97FCB5",
                    color: "#263238",
                    textTransform: "none",
                    fontWeight: "bold",
                    fontSize: "20px",
                    ":hover": {
                      background: "#97FCB5",
                    },
                  }}
                >
                  Join Studiquo
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item flex={1}></Grid>
          <Grid item mt={4} xs={12} lg={4}>
            <Grid
              container
              alignContent={"center"}
              justifyItems={"center"}
              p={3}
              display={{ xs: "none", md: "flex", lg: "flex" }}
            >
              <MainPageCard />
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyItems={"center"}>
          <Grid container justifyContent={"center"}>
            <Typography fontSize={"36px"} fontWeight={"bold"}>
              Challenge the status quo
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography
              fontSize={"16px"}
              color={"#717171"}
              fontWeight={"bold"}
              pt={1}
            >
              Who is Studiquo for?
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} pt={10} pb={20}>
            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>
            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>

            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>
          </Grid>
        </Grid>

        <Grid container justifyItems={"center"}>
          <Grid container justifyContent={"center"}>
            <Typography fontSize={"36px"} fontWeight={"bold"}>
              Our features
            </Typography>
          </Grid>
          <Grid container justifyContent={"center"} pt={10} pb={20}>
            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>
            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>

            <Grid item xs={12} md={4} pb={2}>
              <HomeCard title={""} icon={undefined} onClick={() => {}} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent={"center"}
        sx={{ background: "#F5F7FA" }}
        p={2}
        pt={10}
        pb={10}
      >
        <Grid container justifyContent={"center"}>
          <Typography
            fontSize={"36px"}
            fontWeight={"bold"}
            sx={{ textAlign: "center" }}
          >
            Shape the new standard for teaching
          </Typography>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Button
            disableRipple
            sx={{
              mt: 5,
              p: 2,
              pl: 3,
              pr: 3,
              borderRadius: "20px",
              background: "#97FCB5",
              color: "#263238",
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "20px",
              ":hover": {
                background: "#97FCB5",
              },
            }}
          >
            Join Studiquo
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
