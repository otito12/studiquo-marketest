import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useTheme } from "@mui/material/styles";

function DashWidLgNum({
  title,
  width,
  icon,
  iconWidth,
  onClick,
}: {
  title: string;
  width?: string;
  iconWidth?: number | string;
  icon: any;
  onClick: Function;
}) {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"center"} padding={0.5}>
      <Button
        disableElevation
        disableRipple
        onClick={() => onClick(false)}
        sx={{
          borderRadius: "8px",
          width: `${width ? width : "100%"}`,
          background: "white",
          border: "solid 1px #e8e8e8 !important",
          maxWidth: "250px",
          minWidth: "80px", //set same as div below to make work aspect work
          ":hover": {
            ".MuiIcon-root": {
              color: "#97FCB5 !important",
            },
            background: "white",
            border: "solid 2px #97FCB5 !important",
            boxShadow: "1px 3px 12px #e2e2e2 !important",
          },
        }}
      >
        {/* Forces the card to be in 1/1 aspect ratio  */}
        <div
          style={{
            width: "100%",
            maxWidth: "250px",
            minWidth: "80px", //set same as Car above to make work aspect work
            aspectRatio: 1 / 1,
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            sx={{
              width: "100%",
              height: "100%",
              padding: "5px 5px 8px 5px",
            }}
          >
            <Grid
              container
              justifyContent={"center"}
              alignContent={"center"}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Grid item xs={12} sx={{ pb: 3 }}>
                <Icon
                  component={icon}
                  sx={{
                    color: "#D9D9D9",
                    height: `${iconWidth ? iconWidth + "px" : 50}px`,
                    width: `${iconWidth ? iconWidth + "px" : 50}px`,
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  align="center"
                  sx={{
                    color: "#373D5D",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {title}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Button>
    </Grid>
  );
}

export default DashWidLgNum;
