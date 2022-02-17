import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";
import { Heading, HeadingProps, Text, TextProps } from "./Typography";

const components: ComponentMap = {
  p: (props: TextProps) => <Text {...props} />,
  h1: (props: HeadingProps) => <Heading {...props} />,
  h2: (props: HeadingProps) => <Heading as="h2" level="two" {...props} />,
  h3: (props: HeadingProps) => <Heading as="h3" level="three" {...props} />,
  h4: (props: HeadingProps) => <Heading as="h4" level="four" {...props} />,
  pre: (props: any) => <SyntaxHighlighter {...props} />,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
