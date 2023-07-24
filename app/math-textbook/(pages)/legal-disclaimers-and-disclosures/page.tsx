"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function page() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    // elem?.scrollIntoView({
    //   behavior: "smooth",
    //   block: "start",
    // });
    window.scrollTo({
      behavior: "smooth",
      top:
        elem!.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        115,
    });
  };
  return (
    <>
      <Grid container p={2}>
        <Grid item flex={1}>
          <Typography variant="h3" fontWeight={600}>
            Legal Disclaimers and Disclosures
          </Typography>
          <Typography pt={3}>
            All documents and contents of this website are created for the
            Stellar Development Foundation (SDF). The purpose of this website is
            to apply for an SDF grant and should not be construed as an offer of
            investment. <br />
            <br />
            CONFIDENTIAL–Not for Further Distribution. This document
            (presentation) is for potential clients only. Only qualified
            investors are permitted to read this document. This offering is not
            available if you are a current U.S citizen or U.S taxpayer.
            <br />
            <br />
            This document is for discussion purposes only and is intended as a
            preliminary summary. This document does not purport to be complete
            and is qualified in its entirety by reference to the more detailed
            discussions to be contained in the Fund’s offering documentation.
            The Investment Manager has the ability in its sole discretion to
            change all or any part of the strategy and parameters described
            herein without notice.
            <br />
            <br />
            The specific terms of an investment in the Fund will be subject to
            the offering documentation. Such terms may change from the time you
            receive this document and the time you receive the formal offering
            documentation. Before making an investment decision with respect to
            the Fund, potential investors must carefully read the formal
            offering documentation (including any relevant underlying
            agreements) and the related subscription documents regarding the
            Fund, and to consult with their tax, legal, and financial advisors.
            <br />
            <br />
            This document is being provided to you on a confidential basis
            solely to assist you in deciding whether or not to proceed with a
            further investigation of the Investment Manager and the Fund.
            Accordingly, this document may not be reproduced in whole or part
            and may not be delivered to any person without the consent of the
            Investment Manager.
            <br />
            <br />
            Nothing set forth herein shall constitute an offer to sell any
            securities or constitute a solicitation of an offer to purchase any
            securities. Any such offer to sell or solicitation of an offer to
            purchase shall be made only by formal offering documentation, which
            will include, among other things, a confidential offering
            memorandum, a limited partnership agreement and a subscription
            agreement. Such formal offering documentation will contain
            additional information not set forth in this document (including,
            among other things, certain risks of investing in the Fund), which
            will be material to any decision to invest in the Fund.
            <br />
            <br />
            No information is warranted by the Investment Manager or its
            affiliates or principals as to completeness or accuracy, express or
            implied, and is subject to change without notice. This document
            contains forward-looking statements, including observations about
            markets and industry and regulatory trends as of the original date
            of this document. Forward-looking statements may be identified by,
            among other things, the use of words such as “targets,” "expects,“
            "anticipates,“ "believes,“ or "estimates,“ or the negatives of these
            terms, and similar expressions. Forward-looking statements reflect
            the Investment Manager’s views as of such date with respect to
            possible future events. Actual results could differ materially from
            those in the forward-looking statements as a result of factors
            beyond the Investment Manager’s control.
            <br />
            <br />
            You are cautioned not to place undue reliance on such statements.
            There is no obligation on the part of the Investment Manager to
            update any of the forward-looking statements in this document.
            <br />
            <br />
            This document should only be considered current as of the date of
            publication without regard to the date on which you may receive or
            access the information. The Investment Manager maintains the right
            to delete or modify information without prior notice. Charts, tables
            and graphs contained in this document are for illustrative purposes
            only and are not intended to be used to assist you in determining
            which securities to buy or sell or when to buy or sell securities.
            Statements made herein that are not attributed to a third-party
            source reflect the views and opinions of the Investment Manager.
            <br />
            <br />
            The past performance of the Investment Manager, its principals,
            members and/or employees is not indicative of future returns. There
            is no guarantee that the Investment Manager will be successful in
            achieving the Fund’s investment objectives and the Fund’s investment
            results may vary substantially. An investment in the Fund will
            involve a high degree of risk, including the risk of complete loss
            of invested capital and is only suitable for sophisticated investors
            who have the financial ability to withstand any such losses.
            <br />
            <br />
            The risk management practices and methods described herein are for
            illustrative purposes only and are subject to modification. No
            assurances can be given that the risk management practices described
            herein will be adequate to safeguard against losses. Targets are
            provided solely as a guide to current expectations. There is no
            guarantee that the Fund will achieve any of the targets or that
            there will be a return on capital.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
