"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function page() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    // elem?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    window.scrollTo({
      behavior: "smooth",
      top:
        elem!.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        115,
    });
  };
  return (
    <>
      <Grid container p={2}>
        <Grid item flex={1}>
          <Typography variant="h3" fontWeight={600}>
            XUSG
          </Typography>
          <Typography pt={3}>
            Excellar’s first offering will be XUSG, a token based on short-term
            US Treasury Bills, capturing the combined benefits of the ongoing
            attractive rate environment, deep liquidity, and stability of the
            underlying market.
            <br />
            <br />
            To track the performance and exposure of short-term US Treasury
            Bills, Excellar will invest in the Blackrock’s iShares Short
            Treasury Bond ETF (SHV), targeting US Treasuries that mature in less
            than one year. Advantages of using an ETF instead of individual
            issues are manyfold, including:
          </Typography>

          <Box
            sx={{
              li: {
                lineHeight: 1.6,
                margin: "10px 0",
              },
            }}
          >
            <ul>
              <li>
                <Typography>
                  Diversification tends to minimize idiosyncratic risks and
                  price dislocations associated with specific issues, such as
                  basis risk surrounding Debt Ceiling flight-to-safety episodes.
                </Typography>
              </li>
              <li>
                <Typography>
                  ETFs generally have better liquidity and price transparency
                  than the underlying bonds, especially during market stress as
                  demonstrated by the 2020 Pandemic Crash.
                </Typography>
              </li>
              <li>
                <Typography>
                  ETF managers typically have better trade execution for the
                  underlying bonds.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
