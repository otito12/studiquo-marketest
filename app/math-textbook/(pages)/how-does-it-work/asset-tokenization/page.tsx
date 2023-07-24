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
            Asset Tokenization
          </Typography>
          <Typography pt={3}>
            Upon passing AML/KYC screening, Excellar users can fund with
            supported stablecoins and receive XUSG tokens in return, which
            represents their ownership in the fund. In future, users will be
            able to transfer XUSG tokens between each other to effect changes in
            fund ownership, as well as use smart contracts to facilitate their
            financial arrangements such as by engaging in lending and trading
            activities with each other. XUSG tokens have transfer restrictions
            that will ensure they do not end up in the hands of anyone not
            approved as an investor in the fund.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
