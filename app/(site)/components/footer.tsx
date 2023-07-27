import React from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
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
              <Grid item xs={12}>
                <Typography
                  color={"white"}
                  fontSize={"20px"}
                  fontWeight={"bold"}
                  sx={{ pb: 2 }}
                >
                  Studiquo
                </Typography>
              </Grid>

              <Grid item>
                <Typography color={"white"} fontSize={"17px"}>
                  Don't forget to join our mailing list, we update and add
                  resources every week!
                </Typography>
              </Grid>
              <Grid container pt={3}>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  sx={{
                    background: "white",
                    borderRadius: "8px",
                    mr: 2,
                  }}
                />
                <Button
                  disableRipple
                  sx={{
                    pl: 3,
                    pr: 3,
                    borderRadius: "8px",
                    background: "#97FCB5",
                    color: "#263238 !important",
                    textTransform: "none",
                    ":hover": {
                      background: "#97FCB5 !important",
                    },
                  }}
                >
                  Subscribe
                </Button>
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
