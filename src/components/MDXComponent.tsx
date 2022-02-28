import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";
import Accordion from "./Accordion";
import CardAbout from "./CardAbout";
import Image, { ImageProps } from "./Image";
import Link from "./Link";
import { Box, List, ListItem, ListItemProps, ListProps } from "./Primitive";
import SyntaxHighlighter from "./SyntaxHighlighter";
import { Heading, HeadingProps, Text, TextProps } from "./Typography";

const components: ComponentMap = {
  p: (props: TextProps) => (
    <Text css={{ mb: "$5", "@md": { px: "$8" } }} {...props} />
  ),
  em: (props: TextProps) => (
    <Text as="em" css={{ fontStyle: "italic" }} {...props} />
  ),
  strong: (props: TextProps) => (
    <Text as="strong" css={{ fontWeight: "$bold" }} {...props} />
  ),
  ul: (props: ListProps) => <List css={{ mt: "$2", mb: "$5" }} {...props} />,
  ol: (props: ListProps) => (
    <List
      as="ol"
      css={{ listStyleType: "decimal", mt: "$2", mb: "$5" }}
      {...props}
    />
  ),
  li: (props: ListItemProps) => <ListItem {...props} />,
  h1: (props: HeadingProps) => (
    <Heading css={{ mb: "$3", color: "$primary" }} {...props} />
  ),
  h2: (props: HeadingProps) => (
    <Heading
      as="h2"
      css={{ mb: "$3", color: "$secondary" }}
      level="two"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <Heading as="h3" css={{ mb: "$3" }} level="three" {...props} />
  ),
  code: (props: TextProps) => (
    <Text
      as="code"
      css={{
        display: "inline-block",
        fontFamily: "$code",
        color: "$amber10",
        px: "$2",
        br: "$md",
        backgroundColor: "$gray3",
      }}
      {...props}
    />
  ),
  pre: (props: any) => (
    <>
      <SyntaxHighlighter {...props} />
    </>
  ),
  a: (props: any) => <Link type="text" {...props} />,
  CardAbout,
  Image: (props: ImageProps) => (
    <Box css={{ my: "$10" }}>
      <Image src={props.src} alt={props.alt} />
    </Box>
  ),
  Accordion,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
