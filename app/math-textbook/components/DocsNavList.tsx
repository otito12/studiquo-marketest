import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  height: 28,
  margin: 5,
  marginTop: 0,
  borderRadius: "4px",
  ":hover": {
    background: "white",
    color: "#403bd9",
  },
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  p: 0,
  "& .MuiTypography-root": {
    fontSize: "12px !important",
  },
  margin: 0,
}));

export default function DocsNavList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        color: "#60666E",
        bgcolor: "background.paper",
        "& .Mui-selected": {
          background: "white !important",
          color: "#403bd9",
          ":hover": {
            background: "white !important",
          },
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <StyledListItemButton disableRipple selected={true}>
        <StyledListItemText primary="Getting Started" />
      </StyledListItemButton>
      <StyledListItemButton disableRipple>
        <StyledListItemText primary="Drafts" />
      </StyledListItemButton>
      <StyledListItemButton disableRipple>
        <StyledListItemText primary="Drafts" />
      </StyledListItemButton>
    </List>
  );
}
