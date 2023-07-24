"use client";
import { Grid, Typography } from "@mui/material";
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
            Motivation
          </Typography>
          <Typography pt={3}>
            Blockchain foundations and crypto native firms such as DAO
            treasuries, crypto funds, and crypto OTC desks currently hold
            substantial reserves of stablecoins and other crypto assets.
            Notably, the DeFi total value locked (TVL) experienced a decline
            after Q2 2022, resulting in limited participation of most crypto
            native assets in the DeFi ecosystem. Conversely, traditional
            real-world assets like US Treasuries and Agency-backed MBS have
            regained prominence amidst rising inflation and subsequent interest
            rate hikes by central banks. As a result, the demand for
            high-quality fixed-income assets has surged, offering enhanced
            productivity and returns.
            <br /> <br />
            Excellar endeavors to connect the worlds of DeFi and TradFi and
            offer the advantages of both to our users, who will have a unique
            opportunity to gain the flexibility, innovation, and accessibility
            of DeFi, while still benefiting from the stability, trust, and
            familiarity of TradFi.
            <br /> <br />
            Our combined offering of real-world asset tokenization and an
            associated lending protocol provides enhanced and versatile access
            to income-generating assets and allows users to engage in other
            financial activities such as lending to create additional revenue
            streams and optimally allocate capital.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
