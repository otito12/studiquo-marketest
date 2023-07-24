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
            Use Cases & Benefits
          </Typography>
          <Typography pt={3}>
            Excellar endeavors to bridge DeFi and TradFi, thus capturing the
            best of both worlds.
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
                  <b>Greater Accessibility</b> to real-world assets, anywhere
                  from the ultra-liquid US Treasuries to otherwise isolated
                  opportunities, which, along with fractional ownership, can
                  pave the way to the democratization of investing for users
                  across the world.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Superior Transparency</b> as users will be able to see
                  everything including holdings, income, and pricing, thus
                  promoting trust in the investment process.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Income Generation</b> will help users to build wealth and
                  safeguard against inflation in a secure and low-risk way.
                  Furthermore, through the integration with our lending platform
                  xRepo, users can utilize their income-generating assets to borrow
                  other supported crypto assets, paving the way for additional
                  income streams and capital optimization.
                </Typography>
              </li>
              <li>
                <Typography>
                  <b>Composability</b> allows users to transfer tokenized fund
                  interests on-chain through approved smart contracts and engage
                  in financial transactions such as lending and trading. This
                  will allow other developers to use the protocol as a building
                  block in their applications, ultimately achieving a whole
                  financial ecosystem that is compliant on-chain that is both
                  secure and efficient.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
