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
            What is Excellar?
          </Typography>
          <Typography pt={3}>
            Excellar is a fully-backed asset tokenization platform that allows
            users to put their crypto assets to work by participating in
            real-world asset markets.
            <br /> <br />
            While we intend to offer a broad range of products in the long run,
            our first offering will be a token based on short-term US Treasury
            Bills, capturing the combined benefits of the ongoing attractive
            rate environment, deep liquidity, and stability of the underlying
            market.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
