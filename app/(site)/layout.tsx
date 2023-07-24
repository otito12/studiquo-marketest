"use client";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import "../globals.css";
import MainAppBar from "./components/MainAppBar";
import Footer from "./components/footer";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Studiquo",
//   description: "Studiquo Site",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <html lang="en">
      <body>
        <Grid container justifyContent={"center"} alignContent={"center"}>
          <Grid container sx={{ zIndex: 5 }}>
            <MainAppBar />
          </Grid>
          <Grid
            container
            justifyContent={"center"}
            sx={{ height: "100vh", width: "100vw" }}
          >
            <Grid
              container
              justifyContent={"center"}
              sx={{
                zIndex: 3,
                pl: matchesBreakpoint ? 3 : 16,
                pr: matchesBreakpoint ? 3 : 16,
              }}
            >
              {children}
            </Grid>
            <Grid container sx={{ zIndex: 1 }}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
