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
            Why Stellar / Soroban?
          </Typography>
          <Typography pt={3}>
            We will leverage the exclusive power of Stellar's Anchor Network to
            provide an efficient fiat on/off ramp. This means that users can
            easily convert their traditional currency into digital assets and
            vice versa. Also, Stellar is a tried-and-true blockchain offering
            faster, cheaper, and more secure transactions. It also ensures
            compliance with regulations governing fiat currencies by partnering
            with licensed financial institutions acting as network anchors.
            Thus, users can rest assured that their funds are safe and secure.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
