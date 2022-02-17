import { ComponentMap, getMDXComponent } from "mdx-bundler/client";
import React, { useMemo } from "react";
import SyntaxHighlighter from "./SyntaxHighlighter";

const components: ComponentMap = {
  pre: (props: any) => <SyntaxHighlighter {...props} />,
};

export default function MDXComponent({ code }: { code: string }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return <Component components={components} />;
}
