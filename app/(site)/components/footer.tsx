import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function footer() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      sx={{ background: "#263238", p: matchesBreakpoint ? 4 : 10 }}
    >
      <Grid
        container
        sx={{
          "& .MuiButton-text": {
            textAlign: "left",
          },
          "& .MuiButton-root": {
            color: "grey",
            textAlign: "left",
            textTransform: "none",
            ":hover": {
              background: "#00000000",
              color: "white",
            },
          },
        }}
      >
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Grid container direction={"column"}>
              <Typography
                color={"white"}
                fontSize={"20px"}
                fontWeight={"bold"}
                sx={{ pb: 2 }}
              >
                Disclaimer
              </Typography>
              <Grid item>
                <Typography color={"white"}>
                  All documents and contents of this website are created for the
                  Stellar Development Foundation (SDF). The purpose of this
                  website is to apply for an SDF grant and should not be
                  construed as an offer of investment. Please review the "Legal
                  Disclaimers and Disclosures section.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item>
            <Grid container direction={"column"}>
              <Typography color={"white"} sx={{ pl: 1, pt: 2, pb: 3 }}>
                Product
              </Typography>
              <Grid item>
                <Button disableRipple>Product</Button>
              </Grid>{" "}
              <Grid item>
                <Button disableRipple>Product</Button>
              </Grid>{" "}
              <Grid item>
                <Button disableRipple>Product</Button>
              </Grid>
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item xs={12} mt={5}>
          <Divider sx={{ borderColor: "#B9B9B9" }} />
        </Grid>
        <Grid item xs={12} mt={5}>
          <Grid
            container
            sx={{
              "& .MuiSvgIcon-root": {
                color: "white",
              },
            }}
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
