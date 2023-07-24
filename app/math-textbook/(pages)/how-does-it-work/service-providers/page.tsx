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
            Service Providers
          </Typography>
          <Typography pt={3}>
            In response to the widespread defaults of unregulated firms in 2022,
            Excellar will work only with well-established and highly-regulated
            third-party service providers and holds assets in bankruptcy-remote
            custodians.
          </Typography>
          <Box
            pt={1}
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
                  Clear Street will be our Prime Broker to execute trade orders
                  for and custody XUSG’s underlying ETF securities in its
                  account at the DTC.
                </Typography>
              </li>
              <li>
                <Typography>
                  Coinbase will custody the fund’s stablecoin holdings and
                  facilitate conversions between stablecoins and fiat.
                </Typography>
              </li>
              <li>
                <Typography>
                  NAV Consulting will be the independent fund administrator
                  responsible for accounting and reporting.
                </Typography>
              </li>
              <li>
                <Typography>
                  Richey May will be the independent auditor responsible for
                  periodic in-depth financial audits.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
