import * as React from "react";
import Grid from "@mui/material/Grid";
import { Button, Icon, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

function DashWidLgNum({
  title,
  description,
  width,
  image,
  iconWidth,
}: {
  title: string;
  description: string;
  width?: string;
  iconWidth?: number | string;
  image: any;
}) {
  const theme = useTheme();
  return (
    <Grid container justifyContent={"center"} padding={0.5}>
      <Grid
        sx={{
          borderRadius: "20px",
          width: `${width ? width : "100%"}`,
          maxWidth: "400px",
          background: "white",
          border: "solid 1px #D9D9D9 !important",
          minWidth: "80px", //set same as div below to make work aspect work
          ":hover": {},
        }}
      >
        {/* Forces the card to be in 1/1 aspect ratio  */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
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
              direction={"column"}
              justifyContent={"start"}
              alignContent={"center"}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Grid
                item
                flex={1}
                sx={{
                  p: 2,
                  height: "200px",
                  width: "100%",
                  borderRadius: "8px",
                }}
              >
                <Grid
                  container
                  sx={{
                    p: 1,
                    background: "#f9f9f9",
                    height: "100%",
                    borderRadius: "18px",
                  }}
                >
                  <Image
                    src={image}
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                    alt="none"
                  />
                </Grid>
              </Grid>
              <Grid item flex={1} sx={{ pl: 2, pr: 2 }}>
                <Grid container justifyContent={"center"} pb={2}>
                  <Typography
                    align="center"
                    sx={{
                      color: "black",
                      fontSize: "25px",
                      fontWeight: "600",
                    }}
                  >
                    {title}
                  </Typography>
                </Grid>
                <Grid container justifyContent={"center"}>
                  <Typography
                    align="center"
                    sx={{
                      color: "#717171",
                      fontSize: "15px",
                      fontWeight: "100",
                    }}
                  >
                    {description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default DashWidLgNum;
