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
            Privacy Policy
          </Typography>
          <Typography variant="h5" fontWeight={600} pt={3} pb={1}>
            Safety and Security
          </Typography>
          <Typography pt={1}>
            Excellar is committed to safeguarding your personal information. We
            do not sell users’ non-public personal information to anyone and
            only share it as described in this notice.
          </Typography>

          <Typography variant="h5" fontWeight={600} pt={4} pb={1}>
            Information Collected
          </Typography>
          <Typography pt={1}>
            When you interact with Excellar or use Excellar’s services and
            products, the non-public personal information we collect to perform
            the function may include:
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
                <Typography>Contact Information.</Typography>
              </li>
              <li>
                <Typography>
                  Financial Information, such as cryptocurrency wallet
                  information.
                </Typography>
              </li>
              <li>
                <Typography>
                  Transaction Information, such as type of transaction,
                  transaction amount, and timestamp.
                </Typography>
              </li>
              <li>
                <Typography>
                  Online Identifiers, such as geo location/tracking details,
                  browser fingerprint, operating system, browser name and
                  version, and/or personal IP addresses.
                </Typography>
              </li>
              <li>
                <Typography>
                  Usage Data, such as user preferences and other data collected
                  via cookies and similar technologies.
                </Typography>
              </li>
              <li>
                <Typography>
                  Information from third parties as required or permitted by
                  applicable law, including public databases, credit bureaus &
                  ID verification partners.
                </Typography>
              </li>
              <li>
                <Typography>
                  Other general information that we may obtain about you such as
                  demographic information.
                </Typography>
              </li>
            </ul>
          </Box>

          <Typography variant="h5" fontWeight={600} pt={4} pb={1}>
            Disclosure Policy
          </Typography>
          <Typography pt={1}>
            We may share your non-public personal information in the course of
            carrying out necessary functions provided, only under the following
            circumstances:
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
                <Typography>To comply with our legal obligations..</Typography>
              </li>
              <li>
                <Typography>With service providers.</Typography>
              </li>
              <li>
                <Typography>With your knowledge and consent.</Typography>
              </li>
              <li>
                <Typography>During a change to our business.</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
