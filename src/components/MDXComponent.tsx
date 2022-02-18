import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";
import Link from "./Link";
import { List, ListItem, ListItemProps, ListProps } from "./Primitive";
import SyntaxHighlighter from "./SyntaxHighlighter";
import { Heading, HeadingProps, Text, TextProps } from "./Typography";

const components: ComponentMap = {
  p: (props: TextProps) => <Text css={{ mb: "$5" }} {...props} />,
  em: (props: TextProps) => (
    <Text as="em" css={{ fontStyle: "italic" }} {...props} />
  ),
  strong: (props: TextProps) => (
    <Text as="strong" css={{ fontWeight: "$bold" }} {...props} />
  ),
  ul: (props: ListProps) => <List {...props} />,
  ol: (props: ListProps) => (
    <List as="ol" css={{ listStyleType: "decimal" }} {...props} />
  ),
  li: (props: ListItemProps) => <ListItem {...props} />,
  h1: (props: HeadingProps) => <Heading css={{ mb: "$3" }} {...props} />,
  h2: (props: HeadingProps) => (
    <Heading as="h2" css={{ mb: "$3" }} level="two" {...props} />
  ),
  h3: (props: HeadingProps) => (
    <Heading as="h3" css={{ mb: "$3" }} level="three" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <Heading as="h4" css={{ mb: "$3" }} level="four" {...props} />
  ),
  pre: (props: any) => <SyntaxHighlighter {...props} />,
  a: (props: any) => <Link type="text" {...props} />,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
