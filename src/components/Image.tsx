import NextImage, { ImageProps as NextImageProps } from "next/image";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { styled, keyframes, CSS } from "styles/stitches.config";
import { Box } from "./Primitive";
import { useState } from "react";

const ImageAspectRatio = styled(AspectRatio.Root, {
  overflow: "hidden",
  br: "$2xl",
});

const shimmer = keyframes({
  "0%": { backgroundPosition: "0% 0%" },
  "50%": { backgroundPosition: "100% 100%" },
  "100%": { backgroundPosition: "0% 0%" },
});

const Shimmer = styled(Box, {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1,
  transition: "opacity 1s ease-out",
  background: `linear-gradient(145deg, $gray8, $gray9, $gray10)`,
  backgroundPosition: "0% 0%",
  backgroundSize: "200% 200%",
  animation: `${shimmer} 2s ease-in-out infinite`,
});

export type ImageProps = NextImageProps & {
  css?: CSS;
} & AspectRatio.AspectRatioProps;

const fallbackImage: string = "https://picsum.photos/1200/1400";

export default function Image({
  css,
  ratio = 16 / 9,
  src,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSource, setImageSource] =
    useState<ImageProps["src"]>(fallbackImage);

  const handleOnLoadingComplete = () => {
    if (src) {
      setImageSource(src);
    }
    setIsLoading(false);
  };

  return (
    <ImageAspectRatio ratio={ratio} css={css}>
      <>
        <Shimmer css={{ opacity: isLoading ? 1 : 0 }} />
        <NextImage
          layout="fill"
          objectFit="cover"
          onLoadingComplete={handleOnLoadingComplete}
          src={imageSource}
          {...props}
        />
      </>
    </ImageAspectRatio>
  );
}
