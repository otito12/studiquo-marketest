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
            Creation
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
                  User sends USDC to the fund’s smart contract.
                </Typography>
              </li>
              <li>
                <Typography>
                  The smart contract logs your subscription request and
                  atomically (immediately) transfers the USDC to the fund’s
                  account at Coinbase Custody.
                </Typography>
              </li>
              <li>
                <Typography>
                  Excellar’s management company will convert the USDC into USD
                  at Coinbase, who will then wire the USD via one of their
                  partner banks to the fund’s cash account at Clear Street.
                </Typography>
              </li>
              <li>
                <Typography>
                  XUSG tokens will be minted and issued to the user at the
                  execution price based on the fund’s daily NAV.
                </Typography>
              </li>
              <li>
                <Typography>
                  Excellar’s management company will use the USD at Clear Street
                  to purchase the ETF.
                </Typography>
              </li>
              <li>
                <Typography>
                  When the ETF pays out a dividend, Excellar’s management
                  company will reinvest the dividend proceeds in the same
                  underlying ETF. Unlike the ETF, XUSG itself does not pay out a
                  dividend, but accumulates in value as the dividends are
                  reinvested.
                </Typography>
              </li>
            </ol>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
