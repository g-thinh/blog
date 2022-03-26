import type { MDXFrontmatter } from "utils/mdxUtils";
import { ImageProps } from "./Image";
import Link, { LinkProps } from "./Link";
import { Flex } from "./Primitive";
import Tag from "./Tag";
import { Heading, Text } from "./Typography";
import Time, { readTime } from "./Time";

type CardPostProps = MDXFrontmatter & {
  href: LinkProps["href"];
  imageUrl?: ImageProps["src"];
};

export default function CardPost(props: CardPostProps) {
  const getScreenReaderMessage = () => {
    let message = `${props.title}, ${props.description}`;
    if (props.publishedDate) {
      message = message + `, ${readTime(props.publishedDate)}`;
    }
    if (props.tags) {
      message =
        message + `, this post includes topics like ${props.tags?.toString()}`;
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
        href={props.href}
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
        {props.title && (
          <Heading
            aria-hidden
            as="h3"
            level="three"
            css={{
              height: "min(4rem, max-content)",
              fontSize: "$xl",
            }}
          >
            {props.title}
          </Heading>
        )}
        {props.publishedDate && (
          <Time aria-hidden date={props.publishedDate} css={{ mt: "$4" }} />
        )}
        <Flex stack="column" css={{ flexGrow: 1, mt: "$1" }}>
          {props.description && (
            <Text aria-hidden css={{ color: "$gray11", lineHeight: "$base" }}>
              {props.description}
            </Text>
          )}
        </Flex>
        {props.tags && (
          <Flex aria-hidden css={{ gap: "$2", flexWrap: "wrap", mt: "$2" }}>
            {props.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
