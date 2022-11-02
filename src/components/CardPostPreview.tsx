import type { Post } from "../utils/mdxUtils";
import Image from "./Image";
import Link from "./Link";
import { Box, Flex } from "./Primitive";
import Tag from "./Tag";
import Time from "./Time";
import { Heading, Text } from "./Typography";

function CardPreviewCTA() {
  return (
    <Flex
      stack="column"
      css={{
        justifyContent: "center",
        alignContent: "center",
        textAlign: "center",
        gap: "$3",
        br: "$2xl",
        backgroundColor: "$gray4",
        px: "$1",
      }}
    >
      <Heading as="h2" level="two" css={{ color: "$secondary" }}>
        Latest Blog Posts
      </Heading>
      <Text css={{ lineHeight: 1.4 }}>
        Interested in web development? Check out other posts I&apos;ve written.
      </Text>
      <Box>
        <Link href="/blog" type="button">
          See More
        </Link>
      </Box>
    </Flex>
  );
}

export default function CardPostPreview(post: Post) {
  return (
    <Link
      href={post.full_slug ?? ""}
      css={{
        position: "relative",
        overflow: "hidden",
        br: "$2xl",
        width: "100%",
        border: "3px solid",
        borderColor: "transparent",
        "&:hover, &:focus-within": {
          borderColor: "$primary",
          transition: "border 100ms ease-in-out",

          [`& ${Heading}`]: {
            color: "$blue11",
          },
          "> div:first-of-type": {
            opacity: 0.65,
          },
        },
      }}
    >
      <Image
        ratio={2 / 3}
        src={post.frontmatter?.imageUrl ?? ""}
        alt={post.frontmatter?.imageAltText ?? ""}
        css={{ opacity: 0.75, borderRadius: 0 }}
      />
      <Flex
        stack="column"
        css={{
          position: "absolute",
          alignItems: "center",
          gap: "$2",
          p: "$4",
        }}
      >
        <Heading
          as="h3"
          level="three"
          css={{
            textAlign: "center",
            fontWeight: "$bold",
            lineHeight: "$normal",
            color: "white",
          }}
        >
          {post.frontmatter?.title}
        </Heading>
        {post.frontmatter?.publishedDate && (
          <Tag>
            <Time
              css={{ fontSize: "$md" }}
              date={post.frontmatter?.publishedDate}
              format="ll"
            />
          </Tag>
        )}
      </Flex>
    </Link>
  );
}

CardPostPreview.CTA = CardPreviewCTA;
