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
            Eligibility Criteria
          </Typography>
          <Typography pt={3}>
            A user can open an account with Excellar as an investor from any
            country, except if you are a current U.S citizen or U.S taxpayer.
            All applications will be subject to our Know Your Customer (KYC),
            Anti-Money Laundering (AML) processes, and any local regulatory
            requirements.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
