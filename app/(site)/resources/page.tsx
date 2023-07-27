"use client";
import {
  Button,
  Divider,
  Grid,
  Link,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import SectionAccordion from "./components/SectionAccordion";
import ResourceCard from "./components/ResourceCard";
import CalculateIcon from "@mui/icons-material/Calculate";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import SendIcon from "@mui/icons-material/Send";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { useRouter } from "next/navigation";

const StyledInnerGrid = styled(Grid)(({ theme }) => ({
  padding: "2rem",
  background: "#F9F9F9",
  borderBottomLeftRadius: "8px",
  borderBottomRightRadius: "8px",
}));

export default function FundsPage() {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  const router = useRouter();
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        hieght: "100%",
        pt: 9,
        pl: matchesBreakpoint ? 3 : 16,
        pr: matchesBreakpoint ? 3 : 16,
      }}
    >
      <Grid container justifyContent={"center"}>
        <Grid container alignItems={"start"} justifyContent={"center"}>
          <Grid container>
            <Grid container sx={{ width: "100%", mb: 10 }}>
              <Grid item xs={12} mt={3}>
                <Typography fontWeight={"600"} fontSize={"28px"} pt={5} pb={2}>
                  Free Resources
                </Typography>
              </Grid>
              <Grid item xs={12} pb={3}>
                <Typography fontSize={"17px"}>
                  Don't forget to join our mailing list, we update and add
                  resources every week!
                </Typography>
              </Grid>

              <Grid container>
                <SectionAccordion title={"Grade 6"}>
                  <StyledInnerGrid justifyItems={"center"}>
                    <Grid container>
                      <Grid item md={2}>
                        <ResourceCard
                          onClick={() => {
                            router.push("/math-textbook");
                          }}
                          title="Grade 6 Math"
                          icon={CalculateIcon}
                        />
                      </Grid>
                      {/* <Grid item md={2}>
                        <ResourceCard
                          onClick={() => {}}
                          title="Grade 6 English"
                          icon={AddToPhotosIcon}
                        />
                      </Grid>
                      <Grid item md={2}>
                        <ResourceCard
                          onClick={() => {}}
                          title="Grade 6 Science"
                          icon={AutoFixHighIcon}
                        />
                      </Grid> */}
                    </Grid>
                  </StyledInnerGrid>
                </SectionAccordion>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
