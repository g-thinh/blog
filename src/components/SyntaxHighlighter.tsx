import Highlight, { defaultProps } from "prism-react-renderer";
import GetCodeBlockStyles from "styles/getCodeBlockStyles";
import { styled } from "styles/stitches.config";

const Pre = styled("pre", {
  fontFamily: "$code",
  lineHeight: "$tall",
  p: "$4",
  br: "$lg",
  my: "$6",
});

type SyntaxHighlighterProps = React.ComponentPropsWithoutRef<"pre"> & {
  children?: React.ReactElement | null;
};

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children }) => {
  const code = children?.props.children;
  const language = children?.props.className?.replace("language-", "").trim();

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={GetCodeBlockStyles()}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <Pre className={className} style={{ ...style }}>
            {tokens.slice(0, -1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        </>
      )}
    </Highlight>
  );
};

export default SyntaxHighlighter;
