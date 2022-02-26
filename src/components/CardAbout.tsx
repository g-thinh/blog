import { styled } from "styles/stitches.config";
import Image, { ImageProps } from "./Image";
import { Section } from "./Layout";
import { Box, Flex } from "./Primitive";
import { Heading, Text } from "./Typography";

const CardContainer = styled(Flex, {
  position: "relative",
  flexDirection: "column",
  border: "1px solid",
  my: "$10",
  borderColor: "$gray4",
  backgroundColor: "$gray5",
  br: "$2xl",
  maxWidth: "$lg",
  margin: "2rem auto",
  "@md": {
    flexDirection: "row",
    maxWidth: "$full",
  },
});

const ImageContainer = styled(Box, {
  size: 180,
  margin: "auto",
  transform: "translateY(-2rem)",
  "@sm": {
    size: 240,
  },
  "@md": {
    size: 300,
    transform: "translate(2rem, -2rem)",
  },
});

const TextContainer = styled(Flex, {
  flexDirection: "column",
  transform: "translateY(-2rem)",
  p: "$6",
  gap: "$3",
  whitespace: "wrap",
  textAlign: "center",
  margin: "auto",
  "@md": {
    marginLeft: "3rem",
    transform: "translateY(0)",
  },
});

type CardAboutProps = React.PropsWithChildren<{
  src: ImageProps["src"];
  title?: string;
  description?: string;
}>;

export default function CardAbout(props: CardAboutProps) {
  return (
    <Section as="article">
      <CardContainer>
        <ImageContainer>
          <Image
            src={props.src}
            alt=""
            ratio={1}
            css={{
              br: "$full",
              boxShadow: "$lg",
            }}
          />
        </ImageContainer>
        <TextContainer>
          <Heading as="h2" level="two" css={{ fontWeight: "$light" }}>
            {props.title}
          </Heading>
          <Text css={{ lineHeight: "$tall" }}>{props.description}</Text>
        </TextContainer>
      </CardContainer>
    </Section>
  );
}
