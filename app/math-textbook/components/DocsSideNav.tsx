import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  // height: 33,
  margin: 5,
  marginTop: 0,
  borderRadius: "4px",
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  p: 0,
  margin: 0,
}));

const StlyedLink = styled(Link)(({ theme }) => ({
  textTransform: "none",
  textDecoration: "none",
}));

export default function NestedList() {
  const [open, setOpen] = useState(true);

  const router = useRouter();
  const path = usePathname().split("/").slice(-1)[0];

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
          background: "#F2F2F2 !important",
          color: "#403bd9",
          ":hover": {
            background: "#F2F2F2 !important",
          },
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <StyledListItemButton
        disableRipple
        selected={path == "docs"}
        onClick={() => router.push("/resources/math-textbook/")}
      >
        <StyledListItemText primary="Motivation" />
      </StyledListItemButton>

      <StyledListItemButton
        disableRipple
        selected={path == "what-is-excellar"}
        onClick={() => router.push("/resources/math-textbook/what-is-excellar")}
      >
        <StyledListItemText primary="What is Excellar" />
      </StyledListItemButton>

      <StyledListItemButton
        disableRipple
        selected={path == "use-cases-and-benefits"}
        onClick={() =>
          router.push("/resources/math-textbook/use-cases-and-benefits")
        }
      >
        <StyledListItemText primary="Use Cases & Benefits" />
      </StyledListItemButton>

      <StyledListItemButton disableRipple onClick={handleClick}>
        <StyledListItemText primary="How Does It Work" />
        {open ? (
          <ExpandLess sx={{ color: "#403bd9" }} />
        ) : (
          <ExpandMore sx={{ color: "#403bd9" }} />
        )}
      </StyledListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledListItemButton
            disableRipple
            selected={path == "entities"}
            onClick={() =>
              router.push("/resources/math-textbook/how-does-it-work/entities")
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Entities" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "xusg"}
            onClick={() =>
              router.push("/resources/math-textbook/how-does-it-work/xusg")
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="XUSG" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "asset-tokenization"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/asset-tokenization"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Asset Tokenization" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "eligibility-criteria"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/eligibility-criteria"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Eligibility Criteria" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "onboarding"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/onboarding"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Onboarding" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "creation"}
            onClick={() =>
              router.push("/resources/math-textbook/how-does-it-work/creation")
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Creation" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "redemption"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/redemption"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Redemption" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "calculations"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/calculations"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Calculations" />
          </StyledListItemButton>

          <StyledListItemButton
            disableRipple
            selected={path == "service-providers"}
            onClick={() =>
              router.push(
                "/resources/math-textbook/how-does-it-work/service-providers"
              )
            }
            sx={{ pl: 4 }}
          >
            <StyledListItemText primary="Service Providers" />
          </StyledListItemButton>
        </List>
      </Collapse>
      <StyledListItemButton
        disableRipple
        selected={path == "why-stellar-soroban"}
        onClick={() =>
          router.push("/resources/math-textbook/why-stellar-soroban")
        }
      >
        <StyledListItemText primary="Why Stellar / Soroban" />
      </StyledListItemButton>
      <StyledListItemButton
        disableRipple
        selected={path == "governance"}
        onClick={() => router.push("/resources/math-textbook/governance")}
      >
        <StyledListItemText primary="Governance" />
      </StyledListItemButton>

      <StyledListItemButton
        disableRipple
        selected={path == "legal-disclaimers-and-disclosures"}
        onClick={() =>
          router.push(
            "/resources/math-textbook/legal-disclaimers-and-disclosures"
          )
        }
      >
        <StyledListItemText primary="Legal Disclaimers and Disclosures" />
      </StyledListItemButton>

      <StyledListItemButton
        disableRipple
        selected={path == "privacy-policy"}
        onClick={() => router.push("/resources/math-textbook/privacy-policy")}
      >
        <StyledListItemText primary="Privacy Policy" />
      </StyledListItemButton>
    </List>
  );
}
