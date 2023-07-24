"use client";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import DocsAppBar from "./components/DocsAppBar";
import DocsSideNav from "./components/DocsSideNav";
import useMediaQuery from "@mui/material/useMediaQuery";
import DocsPageButton from "./components/DocsPageButton";
import DocsIconNav from "./components/DocsIconNav";
import DocsNavList from "./components/DocsNavList";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const pageorder = [
  "/resources/math-textbook",
  "/resources/math-textbook/what-is-excellar",
  "/resources/math-textbook/use-cases-and-benefits",
  "/resources/math-textbook/how-does-it-work/entities",
  "/resources/math-textbook/how-does-it-work/xusg",
  "/resources/math-textbook/how-does-it-work/asset-tokenization",
  "/resources/math-textbook/how-does-it-work/eligibility-criteria",
  "/resources/math-textbook/how-does-it-work/onboarding",
  "/resources/math-textbook/how-does-it-work/creation",
  "/resources/math-textbook/how-does-it-work/redemption",
  "/resources/math-textbook/how-does-it-work/calculations",
  "/resources/math-textbook/how-does-it-work/service-providers",
  "/resources/math-textbook/why-stellar-soroban",
  "/resources/math-textbook/governance",
  "/resources/math-textbook/legal-disclaimers-and-disclosures",
  "/resources/math-textbook/privacy-policy",
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  const theme = useTheme();
  const router = useRouter();
  const matches = useMediaQuery(theme.breakpoints.down("lg"));
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex < pageorder.length) {
      setCurrentIndex((lastIndex) => lastIndex + 1);
    } else {
      setCurrentIndex(pageorder.length - 1);
    }
  };

  useEffect(() => {
    setCurrentIndex(pageorder.findIndex((page) => page === path.toString()));
  }, [path]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((lastIndex) => lastIndex - 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // useEffect(() => {
  //   router.push(pageorder[currentIndex]);
  // }, [currentIndex]);

  const getNameFromPath = (path: string) => {
    if (path === "/resources/math-textbook") {
      return "Getting Started";
    }
    return path
      .split("/")
      .splice(-1)[0]
      .split("-")
      .map((word) => word[0].toUpperCase() + word.substring(1))
      .join(" ");
  };

  return (
    <html lang="en">
      <body>
        <Grid container direction={"column"} alignContent={"start"}>
          <Grid item width={"100%"}>
            <DocsAppBar />
          </Grid>
          <Grid container flex={1}>
            <Grid
              container
              display={{ xs: "none", lg: "block" }}
              sx={{
                position: "fixed",
                top: "60px",
                left: 0,
                height: "95vh",
                pb: 10,
                overflow: "scroll",
                width: "250px",
                borderRight: "1px solid #e1e1e1",
              }}
            >
              <DocsSideNav />
            </Grid>
            <Grid
              container
              flex={4}
              sx={{
                mt: "70px",
                ml: matches ? "0px" : "250px",
                mb: "40px",
                mr: matches ? "0px" : "280px",
              }}
            >
              <Grid container>
                <Grid
                  container
                  sx={{ p: 1, pl: 2, pt: 2 }}
                  alignItems={"center"}
                >
                  <DocsIconNav />
                </Grid>
                {children}
                <Grid container sx={{ pt: 3 }}>
                  <Grid item xs={6} sx={{ p: 1, pl: 2 }}>
                    {currentIndex > 0 && (
                      <DocsPageButton
                        onClick={handlePrevious}
                        direction={"left"}
                        text={"Previous"}
                        page={
                          currentIndex > 0
                            ? getNameFromPath(pageorder[currentIndex - 1])
                            : ""
                        }
                      />
                    )}
                  </Grid>

                  <Grid item xs={6} sx={{ p: 1, pr: 2 }}>
                    {currentIndex < pageorder.length - 1 && (
                      <DocsPageButton
                        onClick={handleNext}
                        direction={"right"}
                        text={"Next"}
                        page={
                          currentIndex < pageorder.length - 1
                            ? getNameFromPath(pageorder[currentIndex + 1])
                            : ""
                        }
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              display={{ xs: "none", lg: "block" }}
              sx={{
                position: "fixed",
                top: "80px",
                right: "0px",
                width: "275px",
              }}
            >
              <Grid container>
                <Grid item>
                  <Divider orientation="vertical" />
                </Grid>
                <Grid item flex={1} p={1}>
                  <DocsNavList />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </body>
    </html>
  );
}
