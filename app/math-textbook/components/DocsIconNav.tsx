import { Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { usePathname } from "next/navigation";
import styled from "@emotion/styled";

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "30px",
  color: "#403bd9",
  fontWeight: "100",
  fontSize: "13px",
  ":hover": {
    background: "#F2F2F2",
  },
}));

export default function DocsIconNav() {
  const path = usePathname().split("/");
  return (
    <>
      <IconButton disableTouchRipple>
        <HomeIcon sx={{ height: "20px", width: "20px" }} />
      </IconButton>
      {path
        .filter((pathname) => pathname != "" && pathname != "docs")
        .map((path) => (
          <>
            <NavigateNextIcon
              sx={{ height: "20px", width: "20px", color: "#a1a1a1" }}
            />
            <StyledButton disableTouchRipple>
              {path.split("-").join(" ")}
            </StyledButton>
          </>
        ))}
    </>
  );
}
