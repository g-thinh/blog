import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { CSS, styled } from "styles/stitches.config";
import { Box } from "./Primitive";

dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);

type TimeProps = {
  date: Date;
  css?: CSS;
  format?: "LL" | "ll" | string;
} & React.ComponentProps<typeof StyledTime>;

const StyledTime = styled("time", {
  display: "inline-flex",
});

export function readTime(date: Date, format: TimeProps["format"] = "LL") {
  return dayjs(date).format(format);
}

export default function Time({
  date,
  css,
  format = "LL",
  ...props
}: TimeProps) {
  return (
    <StyledTime dateTime={dayjs(date).format(format)} css={css} {...props}>
      <Box as="abbr">{dayjs(date).format(format)}</Box>
    </StyledTime>
  );
}
