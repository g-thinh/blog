import * as ScrollArea from "@radix-ui/react-scroll-area";
import Highlight, { defaultProps } from "prism-react-renderer";
import GetCodeBlockStyles from "styles/getCodeBlockStyles";
import { styled } from "styles/stitches.config";
import { Flex, Box } from "./Primitive";
import rangeParser from "parse-numeric-range";
import { baseTextStyles, Text } from "./Typography";

const ScrollContainer = styled(ScrollArea.Root, {
  overflow: "hidden",
  position: "relative",
  maxWidth: "100vw",
  my: "$6",
  marginRight: "-2rem",
  marginLeft: "-2rem",
  "@md": {
    br: "$2xl",
    maxWidth: "$4xl",
    mx: "auto",
  },
});

const Pre = styled("pre", baseTextStyles, {
  fontFamily: "$code",
  fontSize: "$md",
  py: "$4",
  borderRadius: "inherit",

  "@md": {
    fontSize: "$lg",
    py: "$8",
  },
});

const Language = styled(Text, {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,

  display: "flex",
  alignItems: "center",
  backgroundColor: "$gray5",
  fontSize: "$md",
  color: "$gray11",
  textTransform: "uppercase",

  px: "$3",
  py: "$2",
  "@md": {
    py: "$4",
    px: "$8",
  },
});

const Scrollbar = styled(ScrollArea.ScrollAreaScrollbar, {
  display: "flex",
  userSelect: "none",
  padding: 2,
  background: "$gray4",
  transition: "background 160ms ease-out",
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: 12,
  },
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
});

const ScrollThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: "$gray6",
  br: "$md",
});

const StyledViewport = styled(ScrollArea.Viewport, {});

type SyntaxHighlighterProps = React.ComponentPropsWithoutRef<"pre"> & {
  children?: React.ReactElement | null;
  showLineNumbers?: boolean;
  hl?: string;
};

function getShouldHighlightLine(hl: SyntaxHighlighterProps["hl"]) {
  if (hl) {
    const lineNumbers: number[] = rangeParser(hl);
    return (index: number) => lineNumbers.includes(index + 1);
  }
  return () => false;
}

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({
  children,
  hl,
  showLineNumbers = false,
}) => {
  const code = children?.props.children;
  const language = children?.props.className?.replace("language-", "").trim();
  const shouldHighlightLine = getShouldHighlightLine(hl);

  return (
    <ScrollContainer>
      <StyledViewport>
        <Highlight
          {...defaultProps}
          code={code}
          language={language}
          theme={GetCodeBlockStyles()}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Flex
              stack="column"
              css={{
                pt: language ? "$10" : undefined,
                "@md": { pt: language ? "$12" : undefined },
              }}
            >
              {language && <Language>{language}</Language>}
              <Pre className={className} style={{ ...style }}>
                {tokens.slice(0, -1).map((line, i) => (
                  <Flex
                    key={i}
                    css={{
                      background: shouldHighlightLine(i) ? "$sky4" : undefined,
                    }}
                  >
                    {showLineNumbers && (
                      <Box
                        aria-hidden
                        css={{
                          minWidth: "2rem",
                          textAlign: "center",
                          color: "$gray8",
                          userSelect: "none",
                        }}
                      >
                        {i + 1}
                      </Box>
                    )}
                    <Box
                      {...getLineProps({ line, key: i })}
                      css={{
                        px: showLineNumbers ? "$2" : "$4",
                        "@md": { px: showLineNumbers ? "$4" : "$8" },
                      }}
                    >
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </Box>
                  </Flex>
                ))}
              </Pre>
            </Flex>
          )}
        </Highlight>
      </StyledViewport>
      <Scrollbar orientation="horizontal">
        <ScrollThumb />
      </Scrollbar>
    </ScrollContainer>
  );
};

export default SyntaxHighlighter;
