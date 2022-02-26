import type { MDXFrontmatter } from "utils/mdxUtils";
import Avatar from "./Avatar";
import Image from "./Image";
import Link, { LinkProps } from "./Link";
import { Box, Flex } from "./Primitive";
import Time from "./Time";
import { Heading, Text } from "./Typography";

type CardPostProps = MDXFrontmatter & {
  href: LinkProps["href"];
};

export default function CardLatestPost(props: CardPostProps) {
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
            src={props?.imageUrl ?? ""}
            alt={props.imageAltText}
            css={{
              boxShadow: "$cardpost",
              "@md": {
                mt: "$6",
                ml: "$8",
              },
            }}
          />
        </Box>
      </Flex>
      <Link
        href={props.href}
        css={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 1,
          "&:hover, &:focus-within": {
            textDecoration: "none",
            [`& + ${Flex} > ${Heading}`]: {
              textDecoration: "underline",
              textDecorationColor: "$secondary",
            },
          },
        }}
      />
      <Flex
        css={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          mx: "$6",
          gap: "$2",

          "@md": {
            mx: "$0",
          },
        }}
      >
        <Heading as="h3" level="three">
          {props.title}
        </Heading>
        {props.description && (
          <Text css={{ color: "$gray11", lineHeight: "$base" }}>
            {props.description}
          </Text>
        )}
        <Flex css={{ alignItems: "center", gap: "$4" }}>
          <Avatar />
          {props.date && <Time date={props.date} />}
        </Flex>
      </Flex>
    </Flex>
  );
}
