import { styled } from "styles/stitches.config";
import { MDXFrontmatter } from "utils/mdxUtils";
import Avatar from "./Avatar";
import { Flex } from "./Primitive";
import Time from "./Time";
import { Heading, Text } from "./Typography";

type PostTitleProps = MDXFrontmatter;

const DateText = styled(Text, {
  color: "$gray11",
  fontSize: "$sm",
  lineHeight: 1,
});

export default function PostTitle(props: PostTitleProps) {
  return (
    <>
      <Heading css={{ color: "$primary" }}>{props.title}</Heading>
      <Flex css={{ gap: "$2", alignItems: "center" }}>
        <Avatar />
        <Flex stack="column" css={{ justifyContent: "center", gap: "$2" }}>
          <Text css={{ fontSize: "$lg", lineHeight: 1 }}>Gia Thinh Nguyen</Text>
          {props.publishedDate && (
            <Flex
              css={{
                display: "inline-flex",
                whiteSpace: "nowrap",
                alignItems: "center",
                gap: "$1",
              }}
            >
              <DateText>
                Published on{" "}
                <Time css={{ display: "inline" }} date={props.publishedDate} />{" "}
              </DateText>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  );
}
