import { getMDXComponent, ComponentMap } from "mdx-bundler/client";
import { useMemo } from "react";
import { Paragraph, Heading, Button as ThemeButton } from "theme-ui";

function Button(props: React.ComponentPropsWithoutRef<typeof ThemeButton>) {
  return <ThemeButton {...props} />;
}

const components: ComponentMap = {
  p: (props: React.ComponentPropsWithoutRef<typeof Paragraph>) => (
    <Paragraph {...props} />
  ),
  h1: (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading as="h1" {...props} />
  ),
  h2: (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading as="h2" {...props} />
  ),
  h3: (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading as="h3" {...props} />
  ),
  h4: (props: React.ComponentPropsWithoutRef<typeof Heading>) => (
    <Heading as="h4" {...props} />
  ),
  Button,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
