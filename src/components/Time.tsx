import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { CSS } from "styles/stitches.config";
import { Flex } from "./Primitive";
import { Text } from "./Typography";
dayjs.extend(advancedFormat);
dayjs.extend(LocalizedFormat);

type TimeProps = {
  date: Date;
  css?: CSS;
};

export default function Time({ date, css }: TimeProps) {
  return (
    <Flex as="time" dateTime={dayjs(date).format("LL")} css={css}>
      <Text as="abbr" css={{ fontSize: "$sm", lineHeight: 1 }}>
        {dayjs(date).format("LL")}
      </Text>
    </Flex>
  );
}
