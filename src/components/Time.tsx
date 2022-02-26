import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { CSS, styled } from "styles/stitches.config";
import { Box, Flex } from "./Primitive";

dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);

type TimeProps = {
  date: Date;
  css?: CSS;
} & React.ComponentProps<typeof StyledTime>;

const StyledTime = styled(Flex, {
  fontSize: "$sm",
  lineHeight: 1,
});

export function readTime(date?: Date) {
  return dayjs(date).format("LL");
}

export default function Time({ date, css, ...props }: TimeProps) {
  return (
    <StyledTime
      as="time"
      dateTime={dayjs(date).format("LL")}
      css={css}
      {...props}
    >
      <Box as="abbr">{dayjs(date).format("LL")}</Box>
    </StyledTime>
  );
}
