import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { keyframes } from "@stitches/react";
import { styled } from "styles/stitches.config";
import { baseTextStyles } from "./Typography";
import { sectionStyles } from "./Layout";

const slideDown = keyframes({
  from: { height: 0, opacity: 0.5 },
  to: { height: "var(--radix-accordion-content-height)", opacity: 1 },
});

const slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
});

const StyledAccordion = styled(RadixAccordion.Root, sectionStyles, {
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  my: "$10",
  gap: "$5",
});

const StyledItem = styled(RadixAccordion.Item, {});

const StyledHeader = styled(RadixAccordion.Header, {
  display: "flex",
  border: "1px solid transparent",
});

const StyledTrigger = styled(RadixAccordion.Trigger, baseTextStyles, {
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  color: "$text",
  border: "unset",
  br: "$2xl",
  px: "$5",
  py: "$3",
  position: "relative",

  "&::after": {
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    zIndex: 0,
    content: "' '",
    width: "calc(95%)",
    margin: "0 auto",
    border: "1px solid",
    borderColor: "$gray4",
    bottom: 0,
    left: "$1",
    right: "$1",
    height: 1,
  },
  '&[data-state="closed"]': { backgroundColor: "$background" },
  '&[data-state="open"]': {
    backgroundColor: "$background",
    color: "$secondary",
  },
  "&:hover": { backgroundColor: "$gray4", cursor: "pointer" },
});

const StyledContent = styled(RadixAccordion.Content, {
  overflow: "hidden",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});

const StyledContentText = styled("div", baseTextStyles, {
  padding: "15px 20px",
  color: "$gray11",
});

const StyledChevron = styled(ChevronDownIcon, {
  color: "$gray11",
  size: 18,
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  "[data-state=open] &": { transform: "rotate(180deg)" },
});

export default function Accordion(
  props: React.ComponentProps<typeof StyledAccordion>
) {
  return <StyledAccordion {...props} />;
}

export const AccordionItem = StyledItem;
export const Trigger = function AccordionTrigger({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <StyledHeader>
      <StyledTrigger>
        {children}
        <StyledChevron aria-hidden />
      </StyledTrigger>
    </StyledHeader>
  );
};
export const Content = function AccordionContent({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <StyledContent>
      <StyledContentText>{children}</StyledContentText>
    </StyledContent>
  );
};

Accordion.Trigger = Trigger;
Accordion.Content = Content;
Accordion.Item = StyledItem;
