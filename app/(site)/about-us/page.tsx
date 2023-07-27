"use client";
import { Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import maincard from "../../../public/about-us.svg";
import Image from "next/image";

export default function FundsPage() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid container>
      <Grid
        // pt={8}
        mt={12}
        container
        direction={"column"}
        sx={{
          hieght: "100%",
          pl: matchesBreakpoint ? 3 : 16,
          pr: matchesBreakpoint ? 3 : 16,
        }}
      >
        <Grid container justifyContent={"center"}>
          <Grid
            container
            alignItems={"start"}
            justifyContent={"center"}
            pt={5}
            // sx={{ maxWidth: matchesBreakpoint ? "100vw" : "80vw" }}
          >
            <Grid item xs={12} md={12} lg={6}>
              <Grid
                container
                sx={{ width: "100%", mb: matchesBreakpoint ? 3 : 10 }}
              >
                <Grid item xs={12}>
                  <Typography fontWeight={"600"} fontSize={"28px"} pb={3}>
                    Our Team
                  </Typography>
                </Grid>
                <Grid item xs={12} pb={3}>
                  <Typography fontSize={"17px"}>
                    Welcome to Studiquo, where education and technology merge to
                    create a dynamic learning experience. Founded by a
                    passionate mother-son duo, Studiquo is driven by a shared
                    vision to revolutionize education through innovative
                    solutions.
                    <br />
                    <br />
                    With an extensive background in mathematics education, our
                    founder, Nene brings a wealth of knowledge and expertise to
                    the table. As the head of math at Riverbank school, she has
                    witnessed firsthand the challenges faced by educators.
                    Motivated to make a difference, she joined forces with her
                    tech-savvy son, a skilled software developer, to create an
                    edtech company that addresses these challenges head-on.
                    <br />
                    <br />
                    We are developing a range of innovative products designed to
                    transform the way education is delivered. From our
                    AI-powered grading system that streamlines assessments, to
                    our open-source teaching resources that foster creativity
                    and collaboration, we are committed to staying at the
                    forefront of educational technology.
                    <br />
                    <br />
                    Studiquo is more than just a software company. We are a
                    community of educators, developers, and learners who are
                    passionate about making a positive impact on education. We
                    actively seek feedback and input from our users, and we
                    continuously iterate and improve our products based on
                    real-world needs and insights.
                    <br />
                    <br />
                    Join us on this exciting journey as we shape the future of
                    education. Together, we can empower teachers, inspire
                    students, and create a world where learning knows no
                    boundaries. Welcome to Studiquo.
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
            <Grid
              xs={12}
              md={12}
              lg={6}
              item
              sx={{
                pb: 10,
                borderRadius: "18px",
                pl: matchesBreakpoint ? 0 : 16,
              }}
            >
              <Image
                src={maincard}
                style={{
                  width: "100%",
                  // height: "560px",
                  position: "relative",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                alt="none"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
