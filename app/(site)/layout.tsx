"use client";
import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import "../globals.css";
import MainAppBar from "./components/MainAppBar";
import Footer from "./components/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Quicksand } from "next/font/google";
const font = Quicksand({
  weight: "500",
  subsets: ["latin"],
});

const themer = createTheme({
  // typography: {
  //   allVariants: {
  //     fontFamily: `${font.style.fontFamily}`,
  //     // textTransform: "none",
  //     // fontSize: 16,
  //   },
  // },
});

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
        <ThemeProvider theme={themer}>
          <Grid container justifyContent={"center"} alignContent={"center"}>
            <Grid container sx={{ zIndex: 5 }}>
              <MainAppBar />
            </Grid>
            <Grid
              container
              justifyContent={"center"}
              sx={{ height: "100vh", width: "100vw" }}
            >
              <Grid container justifyContent={"center"}>
                {children}
              </Grid>
              <Grid container sx={{ zIndex: 1 }}>
                <Footer />
              </Grid>
            </Grid>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
