import { Button, Grid, Typography } from "@mui/material";
import React from "react";

export default function DocsPageButton({
  direction = "left",
  text = "Previous",
  page = "Add a page",
  onClick,
}: {
  direction: string;
  text: string;
  page: string;
  onClick: Function;
}) {
  return (
    <Button
      onClick={() => onClick()}
      disableRipple
      sx={{
        width: "100%",
        height: "100%",
        textAlign: `${direction}`,
        p: 2,
        border: "1px solid #e1e1e1",
        textTransform: "none",
        ":hover": {
          border: "1px solid #403bd9",
          background: "white",
        },
      }}
    >
      <Grid container alignContent={"start"} sx={{ height: "100%" }}>
        <Grid item xs={12}>
          <Typography fontSize={15} sx={{ color: "#60666E" }}>
            {text}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontSize={16}
            fontWeight={600}
            sx={{ color: "#403bd9", letterSpacing: 0.7 }}
          >
            {direction === "left" && "<< "}
            {page}
            {direction === "right" && " >>"}
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
}
