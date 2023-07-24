"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
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
            Calculations
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
                  XUSG Price = Net Asset Value &divide; XUSG Token Count
                  <br />
                  Example:
                  <br />
                </Typography>
                <Image
                  src="/calculations.png"
                  width={543}
                  height={390}
                  alt="Example"
                />
              </li>
              <li>
                <Typography>
                  Quantity of XUSG Issued = USDC Deposited &divide; XUSG Price
                </Typography>
              </li>
              <li>
                <Typography>
                  Quantity of USDC Redeemed = XUSG Quantity &times; XUSG Price
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
