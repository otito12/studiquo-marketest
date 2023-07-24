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
            Redemption
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
                  User submits a redemption request by sending mUSG tokens to
                  the fund’s smart contract
                </Typography>
              </li>
              <li>
                <Typography>
                  The smart contract logs your redemption request.
                </Typography>
              </li>
              <li>
                <Typography>
                  Excellar’s management company will either use its cash
                  reserves or sell enough ETF shares at Clear Street to cover
                  the redemption. XUSG tokens previously held by the user will
                  be burnt.
                </Typography>
              </li>
              <li>
                <Typography>
                  Clear Street will wire the resulting USD to Coinbase, who will
                  convert it to USDC.
                </Typography>
              </li>
              <li>
                <Typography>
                  USDC will be distributed to the user’s wallet to complete the
                  redemption.
                </Typography>
              </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
