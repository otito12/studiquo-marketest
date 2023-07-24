import * as React from "react";
import { styled, withTheme } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  width: "100%",
  marginBottom: `${theme.spacing(2)}`,
  backgroundColor: "rgba(0, 0, 0, 0)",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  borderBottom: "1px solid #d9d9d9",
  backgroundColor:
    theme.palette.mode === "dark"
      ? "#272727"
      : `${theme.palette.background.paper}`,
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: `0 0 0 0`,
  backgroundColor: "rgba(0, 0, 0, 0)",
  // uncomment to make accordions stationary
  // maxHeight: "80vh",
  overflow: "scroll",
}));

// : "350px",
// :"500px",
export default function DashWidAccordion({
  children,
  title,
  minWidth,
  maxWidth,
  ...props
}: {
  children: React.ReactNode;
  title: string;
  minWidth?: string;
  maxWidth?: string;
}) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setOpen(!open);
  };

  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      {/* make children of accordion draggable */}
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
