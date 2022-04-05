import type { Post } from "utils/mdxUtils";
import Avatar from "./Avatar";
import Image from "./Image";
import Link from "./Link";
import { Box, Flex } from "./Primitive";
import Tag from "./Tag";
import Time, { readTime } from "./Time";
import { Heading, Text } from "./Typography";

export default function CardLatestPost(props: Post) {
  const getScreenReaderMessage = () => {
    let message = `${props.frontmatter?.title}, ${props.frontmatter?.description}`;
    if (props.frontmatter?.publishedDate) {
      message = message + `, ${readTime(props.frontmatter?.publishedDate)}`;
    }
    return message;
  };

  return (
    <Flex
      as="article"
      css={{
        gap: "$4",
        position: "relative",
        pb: "$6",
        flexDirection: "column",

        "@md": {
          flexDirection: "row",
        },
      }}
    >
      <Box
        css={{
          width: "$full",
          height: "$full",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: -1,
        }}
      >
        <Box
          css={{
            background: "radial-gradient($secondary, transparent 2px)",
            backgroundSize: "25px 25px",
            opacity: 0.4,
            height: "$full",
          }}
        />
      </Box>
      <Flex css={{ flex: 1, position: "relative" }}>
        <Box
          css={{
            width: "90%",
            margin: "auto",
            "@md": {
              margin: 0,
            },
          }}
        >
          <Image
            ratio={4 / 3}
            src={props.frontmatter?.imageUrl ?? ""}
            alt={props.frontmatter?.imageAltText}
            css={{
              boxShadow: "$cardpost",
              "@md": {
                mt: "$6",
                ml: "$8",
              },
              "&:hover": {
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
          />
        </Box>
      </Flex>
      <Flex
        css={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          mx: "$6",
          gap: "$2",
          position: "relative",
          "@md": {
            mx: "$0",
          },
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
            zIndex: 1,
            "&:hover, &:focus-within": {
              textDecoration: "none",
              [`& + ${Heading}`]: {
                textDecoration: "underline",
                textDecorationColor: "$secondary",
              },
            },
          }}
        />
        <Heading aria-hidden as="h3" level="three">
          {props.frontmatter?.title}
        </Heading>
        <Flex css={{ gap: "$4" }}>
          {props.frontmatter?.tags?.map((tag) => (
            <Tag key={tag} css={{ backgroundColor: "$secondary" }}>
              {tag}
            </Tag>
          ))}
        </Flex>
        {props.frontmatter?.description && (
          <Text aria-hidden css={{ color: "$gray11", lineHeight: "$base" }}>
            {props.frontmatter?.description}
          </Text>
        )}
        <Flex css={{ alignItems: "center", gap: "$4" }}>
          <Avatar />
          {props.frontmatter?.publishedDate && (
            <Time aria-hidden date={props.frontmatter?.publishedDate} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
