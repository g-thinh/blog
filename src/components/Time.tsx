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
};

const StyledTime = styled(Flex, {
  fontSize: "$sm",
  lineHeight: 1,
});

export default function Time({ date, css }: TimeProps) {
  return (
    <StyledTime as="time" dateTime={dayjs(date).format("LL")} css={css}>
      <Box as="abbr">{dayjs(date).format("LL")}</Box>
    </StyledTime>
  );
}
