import type { Post } from "utils/mdxUtils";
import Link from "./Link";
import { Flex } from "./Primitive";
import Tag from "./Tag";
import Time, { readTime } from "./Time";
import { Heading, Text } from "./Typography";

export default function CardPost(props: Post) {
  const getScreenReaderMessage = () => {
    let message = `${props.frontmatter?.title}, ${props.frontmatter?.description}`;
    if (props.frontmatter?.publishedDate) {
      message = message + `, ${readTime(props.frontmatter?.publishedDate)}`;
    }
    if (props.frontmatter?.tags) {
      message =
        message +
        `, this post includes topics like ${props.frontmatter?.tags?.toString()}`;
    }
    return message;
  };

  return (
    <Flex
      as="article"
      stack="column"
      css={{
        position: "relative",
        backgroundColor: "$gray5",
        br: "$2xl",
      }}
    >
      <Link
        href={props.full_slug ?? ""}
        screenReaderMessage={getScreenReaderMessage()}
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          "&:hover, &:focus-within": {
            textDecoration: "none",
            border: "3px solid",
            borderColor: "$secondary",
            transition: "border 100ms ease-in-out",
            br: "$2xl",
            [`& + ${Flex} > ${Heading}`]: {
              color: "$secondary",
            },
          },
        }}
      />
      <Flex stack="column" css={{ height: "100%", p: "$4" }}>
        {props.frontmatter?.title && (
          <Heading
            aria-hidden
            as="h3"
            level="three"
            css={{
              height: "min(4rem, max-content)",
              fontSize: "$xl",
            }}
          >
            {props.frontmatter?.title}
          </Heading>
        )}
        {props.frontmatter?.publishedDate && (
          <Time
            aria-hidden
            date={props.frontmatter?.publishedDate}
            css={{ mt: "$4" }}
          />
        )}
        <Flex stack="column" css={{ flexGrow: 1, mt: "$1" }}>
          {props.frontmatter?.description && (
            <Text aria-hidden css={{ color: "$gray11", lineHeight: "$base" }}>
              {props.frontmatter?.description}
            </Text>
          )}
        </Flex>
        {props.frontmatter?.tags && (
          <Flex aria-hidden css={{ gap: "$2", flexWrap: "wrap", mt: "$2" }}>
            {props.frontmatter.tags.map((tag) => (
              <Tag key={tag} css={{ backgroundColor: "$secondary" }}>
                {tag}
              </Tag>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
