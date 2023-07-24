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

export default function page() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      alignItems={"center"}
      alignSelf={"center"}
      justifySelf={"center"}
      // sx={{ width: matchesBreakpoint ? "85%" : "80%" }}
      mb={20}
    >
      <Grid
        container
        alignItems={"center"}
        alignSelf={"center"}
        justifySelf={"center"}
        sx={{ height: "100vh" }}
        mt={matchesBreakpoint ? 10 : 0}
      >
        <Grid item md={12} lg={8}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: matchesBreakpoint ? "55px" : "64px",
                  fontWeight: "bold",
                }}
              >
                A math teaching standard
              </Typography>
            </Grid>
            <Grid container alignItems={"center"}>
              <Typography
                sx={{
                  fontSize: matchesBreakpoint ? "55px" : "64px",
                  alignItems: "center",
                  alignContent: "center",
                  fontWeight: "bold",
                  color: "#61EE8B",
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
            <Typography color={"#717171"} sx={{ mt: 4, fontSize: "20px" }}>
              We empower teachers with AI powered tools and resources to aid
              Learning
            </Typography>
            <Grid container alignItems={"center"}>
              {" "}
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

        {/* <Grid container mt={4}>
          <UseCaseCard
            title={"Greater Accessibility"}
            details={
              "Greater accessibility to real-world assets, anywhere from the ultra-liquid \
            US Treasuries to otherwise isolated opportunities, which, \
            along with fractional ownership, can pave the way to the \
            democratization of investing for users across the world."
            }
            img_src={access}
          />
        </Grid>
        <Grid container mt={4}>
          <UseCaseCard
            title={"Superior Transparency"}
            details={
              "Superior transparency as users will be able to see everything including holdings, \
            income, and pricing, thus promoting trust in the investment process."
            }
            img_src={transparency}
            justify="right"
          />
        </Grid>
        <Grid container mt={4}>
          <UseCaseCard
            title={"Income Generation"}
            details={
              "Income generation will help users to build wealth and safeguard against inflation \
             in a secure and low-risk way.  Furthermore, through the integration \
             with our lending platform xRepo, users can use their income-generating \
             assets to borrow other supported crypto assets, paving the way for additional \
             income streams and capital optimization."
            }
            img_src={yieldimg}
          />
        </Grid>
        <Grid container mt={4}>
          <UseCaseCard
            title={"Composability"}
            details={
              "Composability allows users to transfer tokenized fund interests on-chain \
            through approved smart contracts and engage in financial transactions \
            such as lending and trading. This will allow other developers to use \
            the protocol as a building block in their applications, ultimately achieving \
            a whole financial ecosystem that is compliant on-chain that is both secure and \
            efficient."
            }
            img_src={compose}
            justify="right"
          />
        </Grid> */}
      </Grid>

      <Grid container mt={15}>
        <Typography fontSize={"30px"} fontWeight={"bold"}>
          Our Partners
        </Typography>
      </Grid>
    </Grid>
  );
}
