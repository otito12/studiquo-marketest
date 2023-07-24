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
            Onboarding
          </Typography>
          <Box
            sx={{
              li: {
                lineHeight: 1.6,
                margin: "10px 0",
              },
            }}
          >
            <ol>
              <li>
                <Typography>
                  Complete our KYC/AML process as an individual.
                </Typography>
              </li>
              <li>
                <Typography>Review and sign the fund documents.</Typography>
              </li>
              <li>
                <Typography>
                  Provide a wallet address to be whitelisted on-chain. This
                  wallet will be used to send in funds, receive fund tokens, and
                  make redemptions.
                </Typography>
              </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
