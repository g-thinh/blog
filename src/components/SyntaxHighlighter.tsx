import * as ScrollArea from "@radix-ui/react-scroll-area";
import Highlight, { defaultProps } from "prism-react-renderer";
import GetCodeBlockStyles from "styles/getCodeBlockStyles";
import { styled } from "styles/stitches.config";
import { Flex } from "./Primitive";
import { baseTextStyles, Text } from "./Typography";

const ScrollContainer = styled(ScrollArea.Root, {
  overflow: "hidden",
  position: "relative",
  maxWidth: "100vw",
  my: "$6",
  br: "$2xl",
  "@xl": {
    marginRight: "-2rem",
    marginLeft: "-2rem",
  },
});

const Pre = styled("pre", baseTextStyles, {
  fontFamily: "$code",
  p: "$4",
  borderRadius: "inherit",
  "@xl": {
    p: "$8",
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

  px: "$4",
  py: "$2",
  "@xl": {
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
};

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = ({ children }) => {
  const code = children?.props.children;
  const language = children?.props.className?.replace("language-", "").trim();

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
            <Flex stack="column" css={{ pt: "$10", "@md": { pt: "$12" } }}>
              <Language>{language}</Language>
              <Pre className={className} style={{ ...style }}>
                {tokens.slice(0, -1).map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
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
