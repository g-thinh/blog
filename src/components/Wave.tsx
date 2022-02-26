import { CSS, styled } from "styles/stitches.config";
import { Box } from "./Primitive";

const Svg = styled("svg", {
  height: "100%",
  width: "100%",
});

type WaveProps = { css?: CSS; fill?: CSS["color"] };

export default function Wave({ css, fill }: WaveProps) {
  return (
    <Box
      css={{
        height: 40,
        overflow: "hidden",
        backgroundColor: "$background",
        "@md": {
          height: 80,
        },
        ...css,
      }}
    >
      <Svg aria-hidden viewBox="0 0 500 150" preserveAspectRatio="none">
        <Box
          as="path"
          d="M-7.34,99.18 C172.68,265.96 305.30,-51.80 502.82,113.98 L500.00,-6.41 L-2.25,-8.38 Z"
          css={{ stroke: "none", fill: fill }}
        ></Box>
      </Svg>
    </Box>
  );
}
