import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";
import { styled } from "styles/stitches.config";
import Accordion from "./Accordion";
import CardAbout from "./CardAbout";
import { Section, sectionStyles } from "./Layout";
import Link from "./Link";
import { List, ListItem, ListItemProps, ListProps } from "./Primitive";
import SyntaxHighlighter from "./SyntaxHighlighter";
import Image, { ImageProps } from "./Image";
import PostTitle from "./PostTitle";
import { Heading, HeadingProps, Text, TextProps } from "./Typography";

const StyledText = styled(Text, sectionStyles, {
  px: "$8",
});
const StyledHeading = styled(Heading, sectionStyles);

const components: ComponentMap = {
  p: (props: TextProps) => <StyledText css={{ mb: "$5" }} {...props} />,
  em: (props: TextProps) => (
    <Text as="em" css={{ fontStyle: "italic" }} {...props} />
  ),
  strong: (props: TextProps) => (
    <Text as="strong" css={{ fontWeight: "$bold" }} {...props} />
  ),
  ul: (props: ListProps) => (
    <Section as="div">
      <List css={{ mt: "$2", mb: "$5" }} {...props} />
    </Section>
  ),
  ol: (props: ListProps) => (
    <Section as="div">
      <List
        as="ol"
        css={{ listStyleType: "decimal", mt: "$2", mb: "$5" }}
        {...props}
      />
    </Section>
  ),
  li: (props: ListItemProps) => <ListItem {...props} />,
  h1: (props: HeadingProps) => (
    <StyledHeading css={{ mb: "$3", color: "$primary" }} {...props} />
  ),
  h2: (props: HeadingProps) => (
    <StyledHeading
      as="h2"
      css={{ mb: "$3", color: "$secondary" }}
      level="two"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <StyledHeading as="h3" css={{ mb: "$3" }} level="three" {...props} />
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
    <Section as="div" css={{ my: "$10" }}>
      <Image
        src={props.src}
        alt={props.alt}
        priority
        css={{ "@lg": { marginRight: "-2rem", marginLeft: "-2rem" } }}
      />
    </Section>
  ),
  Accordion,
  PostTitle,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
